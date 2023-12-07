import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image"
import {FaRegHeart} from "react-icons/fa6";
import {getBlog} from "@/utils/apiUtils";


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

    const data = await getBlog()

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