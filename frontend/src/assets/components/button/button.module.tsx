import styles from "./button.module.css";

export default function Button({children, ...props}:{children:any}) {
    return (
        <button className={styles.button} {...props}>{children}</button>
    );
}