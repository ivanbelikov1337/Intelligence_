"use client"
import React, {FormEvent, useState} from "react";
import styles from "./page.module.css"
import {useRouter} from "next/navigation";
import Link from "next/link";


interface FormElements extends HTMLFormControlsCollection {
    password: HTMLInputElement
    avatar: HTMLInputElement
    email: HTMLInputElement
    name: HTMLInputElement
}

interface CustomFormElement extends HTMLFormElement {
    readonly elements: FormElements

}

const Register = () => {
    const router = useRouter();
    const [error, setError] = useState("")
    const handleSubmit = async (e: FormEvent<CustomFormElement>) => {
        e.preventDefault();
        const password = e.currentTarget.elements.password.value
        const avatar = e.currentTarget.elements.avatar.value!
        const email = e.currentTarget.elements.email.value
        const name = e.currentTarget.elements.name.value

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password,
                    avatar,
                    email,
                    name
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err: any) {
            setError(err)
            console.log(err);
        }
    };
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Create an Account</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    placeholder="Username"
                    type="text"
                    id="name"
                    required
                />
                <input
                    autoComplete="new-email"
                    className={styles.input}
                    placeholder="Email"
                    type="email"
                    id="email"
                    required
                />
                <input
                    autoComplete="new-password"
                    className={styles.input}
                    placeholder="Password"
                    type="password"
                    id="password"
                    required
                />
                <input className={styles.input}
                       placeholder="Image url"
                       name="photo"
                       id="avatar"
                       type="text"
                />
                <button className={styles.button}>Register</button>
                {error && "Something went wrong!"}
            </form>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/login">
                Login with an existing account
            </Link>
        </main>
    )
}

export default Register;