import {FC, FormEventHandler} from "react";
import styles from "./formPost.module.css"

interface IProps {
    handleSubmit: FormEventHandler<HTMLFormElement>
}

const FormPost: FC<IProps> = ({handleSubmit}) => {
    return (
        <form className={styles.new} onSubmit={handleSubmit}>
            <h1 className={styles.postTitle}>Add New Post</h1>
            <input type="text" id="title" placeholder="Title" className={styles.input}/>
            <input type="text" id="desc" placeholder="Desc" className={styles.input}/>
            <input type="text" id="image" placeholder="Image" className={styles.input}/>
            <textarea cols={20} id="textPost" rows={6} className={styles.textArea}/>
            <button className={styles.button}> Send</button>
        </form>
    )
}

export default FormPost;