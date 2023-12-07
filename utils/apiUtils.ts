import {IBlog} from "@/app/blog/page";

export async function getBlog(): Promise<IBlog[]> {
    try {
        const res = await fetch('http://localhost:3000/api/posts', {cache: 'force-cache'})
        return await res.json()

    } catch (e: any) {
        console.log(e)
        throw new Error('Failed to fetch data')
    }
}

export const getData = async (id: string): Promise<IBlog> => {

    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {cache: "no-cache"},)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}
