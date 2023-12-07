import { useContext } from "react"
import styles from "./darkModelToggle.module.css"
import { ThemeContext } from "@/context/ThemeContext"


const DarkModeToggle = () => {
    const context = useContext(ThemeContext)
    if  (!context) {
        throw new Error("Pleas use ThemeProvider in parent component")
    }

    return (
        <div className={styles.container} onClick={() => context?.toggle!("dark")}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={context.mode === "light" ? {left: "0.2rem"} : {right: "0.2rem"}}></div>
        </div>
    )
}

export default DarkModeToggle