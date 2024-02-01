import * as React from 'react';
import Link from 'next/link';
import {Box, Modal, Button, Typography, Grid} from '@mui/material';
import Input from '../input/input.module';
import styles from "./formProject.module.css";
import {useState, useEffect} from 'react';
import { requestPOST } from "@/utils/request";
import { useRouter } from 'next/navigation';
import { request } from 'http';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    p: 3,
};

export default function FormProject() {

    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [postExists, setPostExists] = useState(false);

    // useEffect(() => {
    //   setPostExists(false);
    //   console.log(title, tags, url, username, description, image)
    // },[title, tags, url, username, description, image])

    // async function buttonRegister() {

    //   try {
    //     const responseApi = requestPOST({
    //       route:"/portfolio",
    //       body: {
    //         title: title,
    //         tags: tags,
    //         url: url,
    //         username: username,
    //         description: description,
    //         image:image  
    //       }
    //     });
    //   } catch (e) {
    //     console.error("Não foi possível cadastrar o portifolio!", e);
    //   };
      
    // };

    const handleImageChange = (event:any) => {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

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
          <Box className={styles.box} sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h1">
                Adicionar projeto
            </Typography>

            <Grid container sx={{mt: 1.5}}>
                <Grid item xs={6} sx={{display:{xs:'none',md:'unset'}}}>
                  <Typography className={styles.text} component="p">
                    Selecione o conteúdo que você deseja fazer upload
                  </Typography>

                  {/* <input type="file" onChange={handleImageChange}/><br/> */}
                  <img className={styles.img}
                    src=""
                    alt="" 
                  />
                </Grid>
                
                <Grid item xs={6}>
                  <Grid
                    container item spacing={2}
                    direction="column"
                    justifyContent="center"
                    className={styles.fullInput}
                  >
                    <Grid item>
                      <Input sx={{width: '100%'}} name="" label="Título" type="text" id=""/>
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}  name="" label="Tags" type="text" id=""/>
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}  name="" label="Link" type="text" id=""/>
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}  name="" label="Descrição" type="text" id="" multiline rows={4}/>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>

            <Box sx={{display:{xs:'unset',md:'none'}}}>
              <Typography className={styles.text} component="p">
                Selecione o conteúdo que você deseja fazer upload
              </Typography>

              <img className={styles.img}
                src=""
                alt="" 
              />
            </Box>

            <div>
              <Link className={styles.link} href="" passHref>Visualizar publicação</Link>
            </div>

            <div className={styles.box_btn}>
              <Button className={styles.btn_save}
                variant="contained" 
                size="large">
                Salvar
              </Button>
              
              <Button className={styles.btn_close}
                onClick={handleClose}
                variant="contained" 
                size="large">
                Cancelar
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }