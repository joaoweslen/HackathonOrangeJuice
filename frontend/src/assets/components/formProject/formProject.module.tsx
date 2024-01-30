import * as React from 'react';
import Link from 'next/link';
import Imagem from 'next/image'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '../input/input.module';
import Grid from '@mui/material/Grid';
import styles from "./formProject.module.css";
import img_cont from "../../img/img_container.jpg"

const style = {
    position: 'absolute' as 'absolute',
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
    const [image, setImage] = React.useState('');

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
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h1">
                Adicionar projeto
            </Typography>

            <Grid container sx={{mt: 1.5}}>
                <Grid item xs={6}>
                <Typography id="modal-modal-title" component="p">
                  Selecione o conteúdo que você deseja fazer upload
                </Typography>

                {/* <input type="file" onChange={handleImageChange}/><br/> */}
                <img className={styles.img}
                  src={image}
                  alt="" 
                />
                </Grid>
                
                <Grid item xs={6}>
                  <Grid
                    container item spacing={2}
                    direction="column"
                    justifyContent="center"
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