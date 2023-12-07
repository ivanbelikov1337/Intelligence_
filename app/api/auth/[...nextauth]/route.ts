import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";


interface Credentials {
    email: string;
    password: string;
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: 'email', type: 'email', placeholder: ''},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials) {
                await connect();
                const {password, email} = credentials as Credentials
                try {
                    const user = await User.findOne({
                        email,
                    });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            password, user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (err: any) {
                    throw new Error(err);
                }
            },

        }),
    ],
    pages: {
        error: "/dashboard/login",
    }
});

export {handler as GET, handler as POST};
