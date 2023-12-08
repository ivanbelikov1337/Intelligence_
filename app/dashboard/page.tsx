"use client"
import useSWR from "swr";
import styles from "./page.module.css"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {FormEvent, useEffect} from "react";
import {Triangle} from "react-loader-spinner";
import {avatarUrl} from "@/utils/constant";
import PostItem from "@/componets/dashboardComponents/postItem/PostItem";
import FormPost from "@/componets/dashboardComponents/formPost/FormPost";
import {CustomFormElement, IData} from "@/app/dashboard/types";

const Dashboard = () => {
    const router = useRouter();
    //Here we connect session from next-auth and then we use dataSession and status.
    const {data: dataSession, status} = useSession();
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
                <Triangle height="65" width="65" color="#6A5E96" ariaLabel="triangle-loading" visible={true}/>
            </main>
        );
    }
    const handleSubmit = async (e: FormEvent<CustomFormElement>) => {
        e.preventDefault();
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
                    content: e.currentTarget.elements.textPost.value,
                    title: e.currentTarget.elements.title.value,
                    desc: e.currentTarget.elements.desc.value,
                    img: e.currentTarget.elements.image.value,
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
                        {isLoading ? "Loading" : data?.map((post) => (
                            <PostItem post={post} handleDelete={handleDelete} key={post._id}/>
                        ))}
                    </div>
                </div>
                <FormPost handleSubmit={handleSubmit}/>
            </main>
        );
    }
}
export default Dashboard;