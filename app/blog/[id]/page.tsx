import {FC} from "react";
import styles from "./page.module.css"
import {IBlog} from "@/app/blog/page";
import Image from "next/image"
import BlogAuthor from "@/componets/blogAuthor/BlogAuthor";
import {getData} from "@/utils/apiUtils";

interface IBlogId {
    params: {
        id: string
    }
}




const BlogId: FC<IBlogId> = async ({params}) => {
    //We call the function getData and pass the parameter id and get an array Blog, and then we map this data in tsx.
    const data = await getData(params.id)

    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data?.title!}</h1>
                    <p className={styles.desc}>{data?.desc!}</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={data?.img!} alt={data?.desc!} fill={true} className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{data?.content!}</p>
            </div>
            <BlogAuthor id={data?._id!}/>
        </section>
    )
}

export default BlogId;