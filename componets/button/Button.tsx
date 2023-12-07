import {FC} from "react";
import styles from "./button.module.css"
import Link from "next/link"

interface IButton {
    url: string
    text: string
}

const Button: FC<IButton> = ({url, text}) => {
    return (
        <Link href={url}>
            <button className={styles.container}>
                {text}
            </button>
        </Link>
    )
}

export default Button;