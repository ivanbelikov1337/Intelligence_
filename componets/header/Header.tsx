"use client"
import Link from "next/link";
import styles from "./header.module.css"
import DarkModeToggle from "@/componets/header/darkModelToggle/DarkModeToggle";
import UserModalNavigate from "@/componets/header/userModalNavigate/UserModalNavigate";
import {useSession} from "next-auth/react";
import {usePathname} from "next/navigation";
import {Triangle} from "react-loader-spinner";
import LinkNavigate from "@/componets/header/linkNavigate/LinkNavigate";
import {useState} from "react";
import MenuBurger from "@/componets/header/menuBurger/menuBurger";
import useSWR from "swr";


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];


const Header = () => {
    const {data, status} = useSession()
    const [switherBurger, setSwitherBurger] = useState(false)
    const [switcherModal, setSwitcherModal] = useState(false)
    const currentRoute = usePathname();

    const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json())
    const {data:avatar, isLoading} = useSWR<string>(`/api/users/${data?.user?.email}`, fetcher)
    return (
        <header className={styles.container}>
            <Link href="/" className={styles.logo}>Intelligence</Link>
            <section className={styles.links}>
                <div className={styles.darkMode}>
                    <DarkModeToggle/>
                </div>
                <LinkNavigate links={links} currentRoute={currentRoute}/>
                <MenuBurger setSwitcherModal={setSwitcherModal}
                            setSwitherBurger={setSwitherBurger}
                            switherBurger={switherBurger}
                            currentRoute={currentRoute}
                            links={links}/>
                {status === "loading" &&
                    <Triangle
                        height="4.5rem"
                        width="4.5rem"
                        color="#6A5E96"
                        ariaLabel="triangle-loading"
                        visible={true}
                    />
                }
                {status === "unauthenticated" &&
                    <Link className={styles.login} href={"/dashboard/login"}>Login</Link>}
                {status === "authenticated" &&
                    <UserModalNavigate setSwitcherModal={setSwitcherModal}
                                       switcherModal={switcherModal}
                                       avatar={avatar!}
                    />
                }
            </section>
        </header>
    )
}

export default Header;