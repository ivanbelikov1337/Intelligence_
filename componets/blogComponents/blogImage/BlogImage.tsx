import {FC} from "react";
import  styles from "./blogItems.module.css"
import Image from "next/image";
import Link from "next/link";
import {IBlog} from "@/app/blog/page";

interface IProps {
    item: IBlog
}

const BlogImage: FC<IProps> = ({item}) => {
    return (
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
    )
}

export default BlogImage;