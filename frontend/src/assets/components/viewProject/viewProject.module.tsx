import * as React from 'react';
import styles from "./viewProject.module.css";
import Link from 'next/link';
import {Box, Modal, Button, Card, CardHeader, CardMedia, CardContent, 
    Avatar, IconButton, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '73%',
    left: '50%',
    marginBottom: '10%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
};

export default function ViewProject() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                style={{overflow: "auto"}}
            >
                <Box sx={style} className={styles.box}>
                    <IconButton sx={{position:'absolute', right:8, top:8}} onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                    <Card elevation={0}>
                        <Typography className={styles.title} component='p'>Titulo do Banner</Typography>
                        <CardHeader sx={{padding:0, paddingBottom:'3%', display:{xs:'none',md:'flex'}}}
                            avatar={
                                <Avatar alt="Avatar" src="/Circle.svg"/>
                            }
                            action={
                                <div className={styles.boxTag}>
                                    <IconButton className={styles.tag}>UX</IconButton>
                                    <IconButton className={styles.tag}>DEV</IconButton>
                                </div>
                            }
                            title={
                                <Typography className={styles.name} component="p">Camila Soares</Typography>
                            }
                            subheader="12/12"
                        />
                        <CardMedia className={styles.img}
                            component="img"
                            image="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
                        />
                        <CardHeader sx={{padding:0, paddingTop:'3%', display:{xs:'flex',md:'none'}}}
                            avatar={
                                <Avatar  alt="Avatar" src="/Circle.svg"/>
                            }
                            action={
                                <div className={styles.boxTag}>
                                    <IconButton className={styles.tag}>UX</IconButton>
                                    <IconButton className={styles.tag}>DEV</IconButton>
                                </div>
                            }
                            title={
                                <Typography className={styles.name} component="p">Camila Soares</Typography>
                            }
                            subheader="12/12"
                        />

                        <CardContent className={styles.content} >
                            <p className={styles.text} >
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </p>
                        </CardContent>

                        <CardContent className={styles.contentLink}>
                            <Typography className={styles.down} component="p">Download</Typography>
                            <Link href="https://www.youtube.com/" target="_blank" className={styles.link}>www.teste.com</Link>
                        </CardContent>
                    </Card>
                </Box>
            </Modal>
        </div>
    );
}