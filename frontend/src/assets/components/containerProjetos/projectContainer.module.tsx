import * as React from 'react';
import styles from "./projectContainer.module.css"
import {Card, CardHeader, Box, CardMedia, CardContent, Typography, IconButton,
     Avatar, Menu, MenuList, MenuItem} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const data = [
    {
      src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    //   title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    //   thumbnail: "Don Diablo",
    //   descricao: "descrição do projeto",
      tags: ["ux", "web"],
      nome: "camila",
      avatar: "/Circle.svg",
      data: "12/23",
    },
  ];

export default function ProjectContainer() {
    const [anchorElEdit, setAnchorElEdit] = React.useState<null | HTMLElement>(null);

    const handleOpenEdit = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElEdit(event.currentTarget);
    };
    const handleCloseEdit = () => {
        setAnchorElEdit(null);
    };

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
                image="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
            />
            <CardHeader sx={{padding:0, paddingTop:1}}
                avatar={
                    <Avatar alt="Avatar" src="/Circle.svg" />
                }
                title={
                    <Typography >
                     Camila Soares • 12/23 | UX/DEV
                    </Typography>
                }
            />
        </Card>
        
    </div>
  );
}