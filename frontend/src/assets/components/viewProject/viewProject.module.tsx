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
    p: 6,
};

export default function ViewProject() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className={styles.button}
                onClick={handleOpen}
                variant="contained"
                href='#'
                size="large">
                ADICIONAR PROJETO
            </Button>

            <Modal
                open={open}
                style={{overflow: "auto"}}
            >
                <Box sx={style}>
                    <IconButton  sx={{position:'absolute', right:8, top:8}} onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                    <Card elevation={0}>
                        <Typography className={styles.title}>Titulo do Banner</Typography>
                        <CardHeader sx={{padding:0}}
                            avatar={
                                <Avatar  alt="Avatar" src="/Circle.svg"/>
                            }
                            title="Camilla Soares"
                            subheader="12/12"
                        />
                        <CardMedia
                            component="img"
                            width="auto"
                            height="500"
                            image=""
                        />

                        <CardContent sx={{padding:0}}>
                            <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                            </Typography>
                        </CardContent>

                        <CardContent sx={{padding:0}}>
                            <Typography component="p">Download</Typography>
                            <Link href="https://www.youtube.com/" target="_blank">www.teste.com</Link>
                        </CardContent>
                    </Card>
                </Box>
            </Modal>
        </div>
    );
}