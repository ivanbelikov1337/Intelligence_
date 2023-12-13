"use client"
import {FaHeart, FaRegHeart} from "react-icons/fa6";
import styles from "./blogAuthor.module.css"
import {FC, useEffect, useState} from "react";
import Image from "next/image";
import useSWR from "swr";
import {Triangle} from "react-loader-spinner";


interface IBlogAuthor {
    id: number
}

interface IBlogData {
    userAvatar: string
    usersLiked: string[]
    username: string
    counter: number
    desc: string
}

const BlogAuthorId: FC<IBlogAuthor> = ({id}) => {
    const [disableLike, setDisableLike] = useState(true)
    const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())

    // Here we are taking data from api and using useSWR this is React Hooks for Data Fetching
    const {data, mutate, isLoading} = useSWR<IBlogData>(`http://localhost:3000/api/posts/${id}`, fetcher)

    const definitionLiked = data?.usersLiked.includes(data?.username)!

    useEffect(() => {
        if (definitionLiked) setDisableLike(false)
    }, [definitionLiked]);
    if (isLoading) {
        return (
            <main className={styles.loadingContainer}>
                <Triangle
                    height="65"
                    width="65"
                    color="#6A5E96"
                    ariaLabel="triangle-loading"
                    visible={true}
                />
            </main>
        )
    }

    const handleClick = async (methodUpdate: string) => {
        methodUpdate === "incremented" ? setDisableLike(false) : setDisableLike(true)
        try {
            await fetch("/api/posts", {
                method: "PATCH",
                body: JSON.stringify({
                    likedNameUser: data?.username!,
                    currentCount: data?.counter!,
                    usersLiked: data?.usersLiked,
                    methodUpdate,
                    _id: id,
                }),
            });
            await mutate()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.author}>
            <div className={styles.authorInfo}>
                <Image
                    className={styles.avatar}
                    sizes="max-width: 100px"
                    alt={data?.desc!}
                    src={data?.userAvatar!}
                    height={50}
                    width={50}
                />
                <span className={styles.username}>{data?.username!}</span>
            </div>
            <div className={styles.authorLike}>
                {disableLike ?
                    <FaRegHeart onClick={() => handleClick("incremented")} className={styles.heart} size={20}/> :
                    <FaHeart onClick={() => handleClick("decremented")} className={styles.heart} size={20}/>
                }
                <span className={styles.likeCounter}>{data?.counter!}</span>
            </div>

        </div>
    )
}

export default BlogAuthorId;