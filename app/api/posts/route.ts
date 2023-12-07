import Post from "../../models/Post";
import connect from "@/utils/db";
import {NextRequest, NextResponse} from "next/server";
import {NextApiResponse} from "next";


export const GET = async (req: NextRequest) => {
    const url = new URL(req.url)
    const username = url.searchParams.get("username") as any
    try {
        await connect();
        const posts = await Post.find(username && {username});

        return NextResponse.json(posts, {status: 200})
    } catch (error) {
        return new NextResponse("Error in response of DB", {status: 500});
    }
};

export const POST = async (req: NextRequest) => {
    const body = await req.json()
    const newPost = new Post(body)
    try {
        await connect();

        await newPost.save()

        return new NextResponse("Post has been created", {status: 201})
    } catch (error) {
        return new NextResponse("Error in  DB", {status: 500});
    }
};

export const PATCH = async (req: NextRequest, res: NextApiResponse) => {
    const body = await req.json()
    const filter = {_id: body._id}
    const currentCount = body.currentCount
    const likedNameUser = body.likedNameUser
    const usersLiked = body.usersLiked.includes(likedNameUser)

    try {
        await connect();
        if (body.methodUpdate === "incremented") {
            if (usersLiked) return new NextResponse("User cannot make more than 1 like", {status: 405});

            await Post.findOneAndUpdate(filter, {counter: currentCount + 1})

            await Post.findOneAndUpdate(filter, {$push: {usersLiked: likedNameUser}})

            return new NextResponse("Incremented", {status: 201})
        } else {
            if (currentCount <= 0) return new NextResponse("Counter cannot be less than 0", {status: 405});

            if (!usersLiked) return new NextResponse("User cannot decremented like", {status: 405});

            await Post.findOneAndUpdate(filter, {counter: currentCount - 1})

            await Post.findOneAndUpdate(filter, {$pull: {usersLiked: likedNameUser}})

            return new NextResponse("Decremented", {status: 201})
        }

    } catch (error) {
        return new NextResponse("Error in  DB", {status: 500});
    }
};

