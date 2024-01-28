import TextField from '@mui/material/TextField';

export default function Input(props:any) {
    return (
      // <input className={styles.input}  />
      <TextField
        {...props}
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />

    );
}