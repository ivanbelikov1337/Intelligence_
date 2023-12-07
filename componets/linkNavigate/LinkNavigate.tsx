import {FC} from "react";
import styles from "@/componets/header/header.module.css";
import Link from "next/link";


interface IProps {
    links: ILinkNavigate[]
    currentRoute: string
}

interface ILinkNavigate {
    title: string
    url: string
    id: number
}

const LinkNavigate: FC<IProps> = ({links, currentRoute}) => {
    return (
        <nav className={styles.linkContainer}>
            {links.map((link) => (
                <Link rel={"preload"} className={currentRoute === link.url ? styles.active : styles.linkNavigate}
                      href={link.url} key={link.id}>{link.title}</Link>
            ))}
        </nav>
    )
}

export default LinkNavigate;
