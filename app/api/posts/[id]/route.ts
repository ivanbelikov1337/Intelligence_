import Post from "../../../models/Post";
import connect from "../../../../utils/db";
import {NextRequest, NextResponse} from "next/server";

interface IParams {
    params: {
        id: string
    }
}

export const GET = async (req: NextRequest, {params}: IParams):Promise<NextResponse<Body>> => {

    try {
        await connect();
        const posts = await Post.findById(params.id);

        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch (error) {
        return new NextResponse("Error in response of DB ", {status: 500});
    }
};

export const DELETE = async (req: Request, {params}: IParams): Promise<NextResponse<Body>> => {

    try {
        await connect();
        await Post.findByIdAndDelete(params.id);

        return new NextResponse("Post has been deleted", {status: 200});
    } catch (error) {
        return new NextResponse("Error post was not deleted", {status: 500});
    }
};