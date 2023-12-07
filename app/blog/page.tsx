"use client"
import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image"
import {getBlog} from "@/utils/apiUtils";
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
    const {data} = useSWR<IBlog[]>(`http://localhost:3000/api/posts`, fetcher)

    if (data) {
        return (
            <main>
                {data.map((item) => (
                    <Link className={styles.container} key={item._id} href={`blog/${item._id}`}>
                        <div className={styles.imageContainer}>
                            <Image sizes="max-width: 300px"
                                   priority={true}
                                   className={styles.image}
                                   src={item.img}
                                   height={250}
                                   alt="people"
                                   width={300}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                {item.title}
                            </h1>
                            <p className={styles.desc}>
                                {item.desc}
                            </p>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <Image
                                        className={styles.avatar}
                                        sizes="max-width: 100px"
                                        src={item.userAvatar}
                                        alt={item.desc}
                                        height={50}
                                        width={50}
                                    />
                                    <span className={styles.username}>{item.username}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </main>
        )
    }
}

export default Blog;