import {IBlog} from "@/app/blog/page";

export async function getAllBlogPosts(): Promise<IBlog[]> {
    try {
        const res = await fetch('http://localhost:3000/api/posts',
            {cache: "force-cache", next: {revalidate: 20000}})
        return await res.json()

    } catch (e: any) {
        console.log(e)
        throw new Error('Failed to fetch data')
    }
}

export const getSinglePost = async (id: string): Promise<IBlog> => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: "no-cache"})
        return await res.json()
    } catch (error: any) {
        throw new Error("Failed to fetch data")
    }

}
