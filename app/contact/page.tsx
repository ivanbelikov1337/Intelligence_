import  styles from "./page.module.css"
import Image from "next/image"
import Button from "@/componets/button/Button";
import {Metadata} from "next"

// Either Static metadata
export const metadata: Metadata = {
    title: 'Blog',
}
const Contact= () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Lets Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt="contacts"
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="name" className={styles.input} />
                    <input type="text" placeholder="email" className={styles.input} />
                    <textarea
                        className={styles.textArea}
                        placeholder="message"
                        cols={30}
                        rows={5}
                    ></textarea>
                    <div className={styles.button}>
                        <Button url="#" text="Send" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact;