import * as React from 'react';
import styles from "./projectContainer.module.css"
import {Card, CardHeader, Box, CardMedia, CardContent, Typography, IconButton,
     Avatar, Menu, MenuList, MenuItem} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { requestDELETE, requestPUT } from '../../../utils/request'

export default function ProjectContainer({data}:any) {

    async function buttonDelete() {
        try {
            await requestDELETE('/portfolio/' + data.id)
        }
    }

    async function buttonUpdate() {
        try {
            await requestPUT('/portfolio')

        }
    }

    const [anchorElEdit, setAnchorElEdit] = React.useState<null | HTMLElement>(null);
    const data1 = data;

    const handleOpenEdit = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElEdit(event.currentTarget);
    };
    const handleCloseEdit = () => {
        setAnchorElEdit(null);
    };

    //console.log(data1)

  return (

    <div className={styles.box}>
        <IconButton className={styles.icon} size="small" onClick={handleOpenEdit}>
            <EditIcon />
        </IconButton>

        <Card elevation={0} sx={{ maxWidth: 345 }}>
            <Box >
                <Menu 
                    anchorEl={anchorElEdit}
                    open={Boolean(anchorElEdit)} 
                    onClose={handleCloseEdit}>
                    <MenuList>
                        <MenuItem>Editar</MenuItem>
                        <MenuItem>Excluir</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            
            <CardMedia
                component="img"
                width={"auto"}
                image={data.image} //"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
            />
            <CardHeader sx={{padding:0, paddingTop:1}}
                avatar={
                    <Avatar alt="Avatar" src="/Circle.svg" />
                }
                title={
                    <Typography >
                    {data.userName} • {data.date} | {data.tags.join("/")}
                    </Typography>
                }
            />

        </Card>
            
        
    </div>
  );
}