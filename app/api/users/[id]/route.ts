import {NextRequest, NextResponse} from "next/server";
import connect from "@/utils/db";
import User from "@/app/models/User";


export const GET = async (req: NextRequest):Promise<NextResponse<Body>> => {

    const email = req.url.slice(46)
    console.log(email)
    try {
        await connect();
        const user = await User.findOne({email});

        return NextResponse.json(user, {status: 200})
    } catch (error) {
        return new NextResponse("Error in response of DB", {status: 500});
    }
};