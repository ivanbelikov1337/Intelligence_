import Link from "next/link";
import styles from "./page.module.css"
import {getAllBlogPosts} from "@/utils/apiUtils";
import BlogImage from "@/componets/blogComponents/blogImage/BlogImage";
import BlogAuthors from "@/componets/blogComponents/blogAuthors/BlogAuthors";

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

const Blog = async () => {
    const data = await getAllBlogPosts()

    if (data) {
        return (
            <main>
                {data.map((item) => (
                    <Link className={styles.container} key={item._id} href={`blog/${item._id}`}>
                        <BlogImage item={item}/>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                {item.title}
                            </h1>
                            <p className={styles.desc}>
                                {item.desc}
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