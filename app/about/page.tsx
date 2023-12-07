"use client"
import Button from "@/componets/button/Button";
import People from "../../public/people.jpg"
import styles from "./page.module.css"
import Image from "next/image"


const About =   () => {

    return (
        <main className={styles.container}>
            <section className={styles.imgContainer}>
                <Image src={People} fill={true} className={styles.img} alt="description"/>
                <div className={styles.imgText}>
                    <h1>Peoples is only used in cases when it is necessary to distinguish.</h1>
                    <h2>The Israeli and Palestinian peoples have long been at war.</h2>
                </div>
            </section>
            <section className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet?
                        <br/>
                        <br/>
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br/>
                        <br/> - Dynamic Websites
                        <br/>
                        <br/> - Fast and Handy
                        <br/>
                        <br/> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </section>
        </main>
    )
}

export default About;