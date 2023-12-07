import connect from "@/utils/db"
import User from "@/app/models/User";
import {NextRequest, NextResponse} from "next/server";
import bcrypt from "bcryptjs"


export const POST = async (req: NextRequest) => {
    const data = await req.json()


    await connect()

    const hashedPassword = await bcrypt.hash(data.password, 5)
    const newUser = new User({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        avatar: data.avatar
    })

    try {
        await newUser.save()
        return new NextResponse("User has been created", {status: 201})
    } catch (error: any) {
        return new NextResponse(error.message, {status: 404})
    }
}