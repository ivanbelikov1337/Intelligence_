import {FC} from "react";
import styles from "./page.module.css"
import {notFound} from "next/navigation";
import {IItems, items} from "./data"
import Button from "@/componets/button/Button";
import Image from "next/image"
interface ICategory {
    params: {
        category: string | any
    }
}

const getData = (word: keyof IItems) => {
    const data = items[word]
    if (data) {
        return data
    }
    return notFound()
}

export async function generateMetadata({ params }:ICategory) {

    return {
        title: params.category
    }
}

const Category: FC<ICategory> = ({params}) => {
    const data = getData(params.category)

    return (
        <section className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button text="See More" url="#"/>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill={true}
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Category;
