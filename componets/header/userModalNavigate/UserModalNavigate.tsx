import styles from "./userModalNavigate.module.css";
import {FC} from "react";
import Image from "next/image"
import {signOut} from "next-auth/react";
import {IoSettingsOutline} from "react-icons/io5";
import Link from "next/link";
import {MdLogout} from "react-icons/md";
import {PiUserList} from "react-icons/pi";
import {VscChromeClose} from "react-icons/vsc";


interface IProps {
    setSwitcherModal: Function
    switcherModal: boolean
    avatar: string
}

const UserModalNavigate: FC<IProps> = ({switcherModal, avatar, setSwitcherModal}) => {

        return  (
            <div className={styles.container}>
                <Image onClick={() => setSwitcherModal((prev:boolean) => !prev)}
                       src={avatar} alt="avatar" width={50}
                       className={styles.avatar}
                       height={50}/>
                {switcherModal &&
                    <div className={styles.blockModule}>
                        <div onClick={() => setSwitcherModal((prev:boolean) => !prev)} className={styles.closeModal}>
                            <VscChromeClose size={"2rem"}/>
                        </div>
                        <button onClick={() => signOut({callbackUrl: '/'})}
                                className={styles.logout}>
                            <span>Logout</span>
                            <MdLogout size={"2rem"}/>
                        </button>
                        <Link href={""} className={styles.account}>
                            <span>Account</span>
                            <PiUserList size={"2rem"}/>
                        </Link>
                        <Link href={""} className={styles.setting}>
                            <span>Setting</span>
                            <IoSettingsOutline size={"2rem"}/>
                        </Link>
                    </div>
                }
            </div>
        )
}

export default UserModalNavigate;