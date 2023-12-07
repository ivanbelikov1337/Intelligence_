"use client"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Triangle} from "react-loader-spinner";
import styles from "./page.module.css"
import {useEffect} from "react";

const Account = () => {
    const {status} = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/dashboard/login")
        }
    }, [status, router]);

    if (status === "loading") {
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
    if (status === "authenticated") {
        return (
            <main>
                Account
            </main>
        )
    }
}

export default Account;