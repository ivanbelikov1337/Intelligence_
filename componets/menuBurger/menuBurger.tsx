import {FC} from "react";
import styles from "@/componets/header/header.module.css"
import {TfiMenuAlt} from "react-icons/tfi";
import Link from "next/link";
import {VscChromeClose} from "react-icons/vsc";


interface IMenuBurger {
    setSwitherBurger: Function
    setSwitcherModal: Function
    switherBurger: boolean
    links: ILinkNavigate[]
    currentRoute: string
}

interface ILinkNavigate {
    title: string
    url: string
    id: number
}

const MenuBurger: FC<IMenuBurger> = ({links, currentRoute, switherBurger, setSwitherBurger, setSwitcherModal}) => {
    return (
        <div className={styles.menuBurger}>
            <TfiMenuAlt onClick={() => {
                setSwitherBurger((prev: boolean) => !prev)
                setSwitcherModal(false)
            }}
                        className={styles.menuBurgerButton}
                        size={"4rem"}
            />
            {switherBurger &&
                <nav className={styles.menuBurgerLink}>
                    <div onClick={() => setSwitherBurger((prev: boolean) => !prev)} className={styles.closeBurger}>
                        <VscChromeClose size={20}/>
                    </div>
                    {links.map((link) => (
                        <Link className={currentRoute === link.url ? styles.active : styles.linkNavigate}
                              onClick={() => setSwitherBurger((prev: boolean) => !prev)}
                              href={link.url} key={link.id}
                              rel={"preload"}> {link.title}
                        </Link>))}
                </nav>
            }
        </div>
    )
}

export default MenuBurger;
