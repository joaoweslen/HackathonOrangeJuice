import styles from "./input.module.css";
import TextField from '@mui/material/TextField';

export default function Input(props:any) {
    return (
      // <input className={styles.input}  />
      <TextField
        {...props}
        autoFocus
      />
    );
}