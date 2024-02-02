import * as React from 'react';
import styles from "./projectContainerDescobrir.module.css"
import ViewProject from '../viewProject/viewProject.module';
import {Card, CardHeader, Grid, CardMedia, Typography, IconButton, Avatar} from '@mui/material';

export default function ProjectContainer({data}:any) {
  return (
    <Grid item xs={3} sm={4} md={4}>
    <div className={styles.box}>
        <Card elevation={0} sx={{maxWidth: 445, minWidth: 265,}}>            
            <CardMedia className={styles.media}
                component="img"
                image={data.image}
            />
            <CardHeader sx={{padding:0, paddingTop:1}}
                avatar={
                    <Avatar sx={{width:"30px", height:"30px"}} alt="Avatar" src="/Circle.svg" />
                }
                action={
                    <div className={styles.boxTag}>
                        <IconButton className={styles.tag}>{data.tags[0]}</IconButton>
                        <IconButton className={styles.tag}>{data.tags[1]}</IconButton>
                    </div>
                }
                title={
                    <Typography sx={{fontSize:15}}>
                        {data.userName} • {data.date}
                    </Typography>
                }
            />
        </Card>
    </div>
    <ViewProject/>
    </Grid>
  );
}