import * as React from 'react';
import styles from "./projectContainer.module.css"
import {Card, CardHeader, Box, CardMedia, CardContent, Typography, IconButton,
     Avatar, Menu, MenuList, MenuItem} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import {requestGET, setToken} from '../../../utils/request';
import { PostAdd } from '@mui/icons-material';


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
    const {userPost, setUserPost} = useState([]);
    
        useEffect(() => {
            const dataToken = JSON.parse(localStorage.getItem('data') || '{}');
            console.log(dataToken);
            setToken(dataToken);
            async () => {
                const posts = await requestGET('/portfolio/userposts');
                console.log(posts);
                setUserPost(posts);
            }
        },[setUserPost])
    
        // try {
        //     const dataToken = JSON.parse(localStorage.getItem('data'))
        //     console.log(dataToken.token, "AQUIIIIIIIIIIIIIIIIIIIIIIII");
        //     setToken(dataToken.token);
        //     async () => {
        //         const posts = await requestGET('/portfolio/userposts');
        //         console.log(posts);
        //         setUserPost(posts);
        //     }
        //   const userData = localStorage.getItem('data')
        //   if (userData) {
        //       const dataJson = JSON.parse(userData);
        //       const postsId = dataJson.posts;
        //       const postsData = postsId.map(async (item : any) => {
        //         console.log('id post' + item.id);
        //         const response = await requestGET('/portfolio/' + item.id);
        //         return response;
        //       });
        //     //   return(postsData);
        //   }
        // } catch (e) {
        //   console.error(e)
        // }


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
        {
            userPost && 
            userPost.map((post:any) => {
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
                    image={post.imageUrl}
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
            })
        }

        

        {/* <Card elevation={0} sx={{ maxWidth: 345 }}>
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
        </Card> */}
        
    </div>
  );
}