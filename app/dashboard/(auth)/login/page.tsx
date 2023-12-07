"use client"
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import styles from "./page.module.css"
import {FormEvent, useEffect, useState} from "react";
import {Triangle} from "react-loader-spinner";
import Link from "next/link";
const Login = () => {
    const {status} = useSession()
    const router = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    useEffect(() => {
        if (status == "authenticated"){
            router?.push("/dashboard")
        }
    },[status,router])

    if (status == "loading"){
        return (
            <main className={styles.loadingContainer}>
                <Triangle
                    height="65"
                    width="65"
                    color="#6A5E96"
                    ariaLabel="triangle-loading"
                    visible={true}
                />
            </main>
        )
    }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        signIn("credentials", { email, password })
    }
    return (
        <main className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    placeholder="Email"
                    type="email"
                    required
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    placeholder="Password"
                    type="password"
                    required
                />
                <button className={styles.button}>Login</button>
            </form>
            <button className={styles.loginGoogle} onClick={() => signIn("google")}>Login with Google</button>
            <Link className={styles.register} href={"/dashboard/register"}>Register</Link>
        </main>
    )
}

export default Login;