import styles from "./button.module.css";

export default function Button(props:any) {
    const minCharacterPassword = 6;
    const regex = /\S+@\S+\.\S+/;
    const {Password, Email} = props;
    
    return (
        <input 
            disabled={
                !(Password.length >= 6 && regex.test(Email))
            }
            //onChange = {() => console.log((props.Password).length >= 6,regex.test(props.Email))}
            className={styles.button} 
            {...props}
        />
    );
}