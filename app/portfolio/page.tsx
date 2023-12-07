import styles from "./porfolio.module.css"
import Link from "next/link";
import {Metadata} from "next"

// either Static metadata
export const metadata: Metadata = {
    title: 'Blog',
}
const Portfolio = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className={styles.items}>
                <Link href={"/portfolio/illustrations"} className={styles.item}>
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link href={"/portfolio/websites"} className={styles.item}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href={"/portfolio/applications"} className={styles.item}>
                    <span className={styles.title}>Application</span>
                </Link>
            </div>
        </main>
    )
}
export default Portfolio;