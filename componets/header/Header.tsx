"use client"
import Link from "next/link";
import styles from "./header.module.css"
import DarkModeToggle from "@/componets/darkModelToggle/DarkModeToggle";
import UserModalNavigate from "@/componets/userModalNavigate/UserModalNavigate";
import {useSession} from "next-auth/react";
import {usePathname} from "next/navigation";
import {Triangle} from "react-loader-spinner";
import LinkNavigate from "@/componets/linkNavigate/LinkNavigate";
import {useState} from "react";
import MenuBurger from "@/componets/menuBurger/menuBurger";


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
                    <Link className={styles.login} href={"http://localhost:3000/dashboard/login"}>Login</Link>}
                {status === "authenticated" &&
                    <UserModalNavigate setSwitcherModal={setSwitcherModal}
                                       switcherModal={switcherModal}
                                       email={data?.user?.email!}/>
                }
            </section>
        </header>
    )
}

export default Header;