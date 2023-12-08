import {FC} from "react";
import styles from "@/app/blog/page.module.css";
import Image from "next/image";
import {IBlog} from "@/app/blog/page";

interface IBlogAuthors {
    item: IBlog
}

const BlogAuthors: FC<IBlogAuthors> = ({item}) => {
    return (
        <section className={styles.author}>
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
        </section>
    )
}

export default BlogAuthors;