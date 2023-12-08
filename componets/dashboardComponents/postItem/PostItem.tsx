import {FC} from "react";
import styles from "./postItem.module.css"
import Image from "next/image";
import {FaDeleteLeft} from "react-icons/fa6";

interface IProps {
    post: IPostItem
    handleDelete: Function
}
interface IPostItem {
    _id: string
    img: string
    title: string
    content: string
}
const PostItem: FC<IProps> = ({post,handleDelete}) => {
    return (
        <section className={styles.post}>
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
        </section>
    )
}

export default PostItem;