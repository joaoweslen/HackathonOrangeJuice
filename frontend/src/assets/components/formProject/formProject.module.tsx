import * as React from 'react';
import Link from 'next/link';
import {Box, Modal, Button, Typography, Grid, tabClasses} from '@mui/material';
import Input from '../input/input.module';
import styles from "./formProject.module.css";
import {useState, useEffect} from 'react';
import { requestPOST, requestPOSTT,setToken } from "@/utils/request";

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
    const [tags, setTags] = useState("carro");
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('john john');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("https://i.imgur.com/XRCnu0G.jpeg");
    // const [postExists, setPostExists] = useState(false);

    // useEffect(() => {
    //   // setPostExists(false);
    //   console.log(title, tags, url, username, description, image)
    //   console.log("FOIIIII")
    // },[title, tags, url, username, description, image])

    async function buttonRegister() {
      console.log("Button SALVAR")
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('tags', tags);
        // tags.forEach((tag, index) => {
        //   formData.append('tags[]', tag as any);
        // });  
        formData.append('url', url);
        formData.append('userName', username);
        formData.append('description', description);
        formData.append('image', image);
        setToken(JSON.parse(localStorage.getItem("token") || ""))
        const responseApi = requestPOSTT({
          route:"/teste",
          body: formData
          // body: {
          //   title: title,
          //   tags: tags,
          //   url: url,
          //   userName: username,
          //   description: description,
          //   image:image  
          // }
        });
        setTitle('');
        setTags('');
        setUrl('');
        setUsername('john john');
        setDescription('');
        setImage("https://i.imgur.com/XRCnu0G.jpeg");
        handleClose;
      } catch (e) {
        console.log("Não foi possível cadastrar o portifolio!", e);
      };
      
    };

    const handleImageChangE = (event:any) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          handleImageChangE(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    };

    const handleImageChange = (event:any) => {
      console.log(event.target.files[0])
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

                  <input id="fileInput" style={{ display: 'none' }} type="file" onChange={(e)=> handleImageChange(e)}>
                  </input>
                  <img className={styles.img}
                    onClick={() => document.getElementById('fileInput').click()}
                    src={image}
                    alt="adicionar"
                  />
                  <br/>
                </Grid>
                
                <Grid item xs={6}>
                  <Grid
                    container item spacing={2}
                    direction="column"
                    justifyContent="center"
                    className={styles.fullInput}
                  >
                    <Grid item>
                      <Input sx={{width: '100%'}} 
                        label="Título"
                        inputValue={title} 
                        functionEdicion={setTitle}
                         
                      />
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}} 
                        label="Tags" 
                        inputValue={tags} 
                        functionEdicion={setTags}
                      />
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}
                      label="Link" 
                      inputValue={url} 
                      functionEdicion={setUrl}
                    />
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}
                        inputValue={description} 
                        functionEdicion={setDescription}
                        multiline 
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>

            <Box sx={{display:{xs:'unset',md:'none'}}}>
              <Typography className={styles.text} component="p">
                Selecione o conteúdo que você deseja fazer upload
              </Typography>
              <input id="fileInputMobile" style={{ display: 'none' }} type="file" onChange={(e)=> handleImageChange(e)}>
              </input>
              <img className={styles.img}
                onClick={() => document.getElementById('fileInputMobile').click()}
                src={image}
                alt="adicionar"
              />
            </Box>

            <div>
              <Link className={styles.link} href="" passHref>Visualizar publicação</Link>
            </div>

            <div className={styles.box_btn}>
              <Button className={styles.btn_save}
                onClick={() => buttonRegister()}
                variant="contained" 
                size="large"
              >
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