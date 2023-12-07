import styles from "./page.module.css"
import Image from "next/image"
import Intelligence from "../public/Intelligence.jpg"
import Button from "@/componets/button/Button";

export default function Home() {
    return (
        <main className={styles.container}>
            <section className={styles.item}>
                <h1 className={styles.title}>
                    The long run of fake insights within following few a long time
                </h1>
                <p className={styles.desc}>
                    Turn your ideas into reality.
                    We bring together teams from 4,444 global technology sectors.
                </p>
                <div className={styles.button}>
                    <Button url="/portfolio" text="See Our Works"/>
                </div>
            </section>
            <section className={styles.itemImg}>
                <Image src={Intelligence} priority={true} alt='main photo' className={styles.img}/>
            </section>
        </main>
    )
}
