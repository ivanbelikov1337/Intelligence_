"use client"
import useSWR from "swr";
import styles from "./page.module.css"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image"
import {FormEvent, useEffect} from "react";
import {FaDeleteLeft} from "react-icons/fa6";
import {Triangle} from "react-loader-spinner";
import {avatarUrl} from "@/utils/constant";

interface IData {
    _id: string
    img: string
    title: string
    desc: string
    avatar: string
    content: string
}

interface FormElements extends HTMLFormControlsCollection {
    title: HTMLInputElement
    desc: HTMLInputElement
    image: HTMLInputElement
    textPost: HTMLTextAreaElement
}

interface CustomFormElement extends HTMLFormElement {
    readonly elements: FormElements

}

const Dashboard = () => {
    //Here we connect session from next-auth and then we use dataSession and status.
    const {data: dataSession, status} = useSession();

    const router = useRouter();

    const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())

    // Here we are taking data from api and using useSWR this is React Hooks for Data Fetching
    const {data: dataUSer} = useSWR<IData>(`api/users/${dataSession?.user?.email}`, fetcher)

    const {data, isLoading, mutate} = useSWR<IData[]>(`api/posts?username=${dataSession?.user?.name}`, fetcher)

    // if users have status unauthenticated we must redirect him on page login
    useEffect(() => {
        if (status == "unauthenticated") {
            router?.push("/dashboard/login")
        }
    }, [status, router])

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
        );
    }

    // Fetcher we need because then using in useSwr


    //Here we send a new post.
    const handleSubmit = async (e: FormEvent<CustomFormElement>) => {
        e.preventDefault();
        //Here we take data from our  event and then we use him in fetch data
        const title = e.currentTarget.elements.title.value
        const desc = e.currentTarget.elements.desc.value
        const img = e.currentTarget.elements.image.value
        const content = e.currentTarget.elements.textPost.value

        // Checked dataSession
        if (!dataSession) return
        try {
            // And now we went send post req with our data
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    userAvatar: dataUSer?.avatar || avatarUrl,
                    username: dataSession.user?.name,
                    counter: 0,
                    content,
                    title,
                    desc,
                    img,
                }),
            });
            //This method  to revalidate
            await mutate();
            //And here we reset all our form element i am use this method because generic FormEvent delete function reset target.
            const resetForm = e.target as HTMLFormElement
            resetForm.reset()
        } catch (error) {
            console.log(error);
        }
    };


    //This function can delete our single select post
    const handleDelete = async (id: string) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            //This method  to revalidate
            await mutate();
        } catch (error) {
            console.log(error);
        }
    };

    if (status === "authenticated") {
        return (
            <main className={styles.container}>
                <div className={styles.posts}>
                    <h1 className={styles.title}>Your Posts</h1>
                    <div className={styles.postContainer}>
                        {isLoading ? "Loading"
                            : data?.map((post) => (
                                <div className={styles.post} key={post._id}>
                                    <div className={styles.imgContainer}>
                                        <Image
                                            src={post.img}
                                            alt={post.title}
                                            className={styles.img}
                                            width={200}
                                            height={100}
                                        />
                                    </div>
                                    <div className={styles.postItem}>
                                        <h2 className={styles.postTitle}>{post.title}</h2>
                                        <p className={styles.postContent}>{post.content}</p>
                                    </div>
                                    <span onClick={() => handleDelete(post._id)} className={styles.delete}>
                                        <FaDeleteLeft color={"silver"} size={"3rem"}/>
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>

                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1 className={styles.postTitle}>Add New Post</h1>
                    <input type="text" id="title" placeholder="Title" className={styles.input}/>
                    <input type="text" id="desc" placeholder="Desc" className={styles.input}/>
                    <input type="text" id="image" placeholder="Image" className={styles.input}/>
                    <textarea cols={20} id="textPost" rows={6} className={styles.textArea}/>
                    <button className={styles.button}> Send</button>
                </form>
            </main>
        );
    }
}
export default Dashboard;