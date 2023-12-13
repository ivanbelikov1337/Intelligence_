"use client"
import Link from "next/link";
import styles from "./page.module.css"
import BlogImage from "@/componets/blogComponents/blogImage/BlogImage";
import BlogAuthors from "@/componets/blogComponents/blogAuthors/BlogAuthors";
import useSWR from "swr";

export interface IBlog {
    _id: number
    title: string
    counter: number
    desc: string
    img: string
    userAvatar: string
    content: string
    username: string
}

const Blog =  () => {
    const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())
    // Here we are taking data from api and using useSWR this is React Hooks for Data Fetching
    const {data, mutate, isLoading} = useSWR<IBlog[]>(`http://localhost:3000/api/posts`, fetcher)


    if (data) {
        return (
            <main>
                {data.map((item) => (
                    <Link className={styles.container} key={item._id} href={`blog/${item._id}`}>
                        <BlogImage item={item}/>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                {item?.title}
                            </h1>
                            <p className={styles.desc}>
                                {item?.desc}
                            </p>
                            <BlogAuthors item={item}/>
                        </div>
                    </Link>
                ))}
            </main>
        )
    }
}

export default Blog;