import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>
                <p>Developer by Ivan Belikov</p>
            </div>
            <div>
                <p>2023 My app intelligence</p>
            </div>
            <div className={styles.social}>
                <a target="_blank" href="https://github.com/ivanbelikov1337">
                    <Image className={styles.icon} width={25} height={25} src="/git.png" alt="github.com"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;