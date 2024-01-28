import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '../input/input.module';
import Grid from '@mui/material/Grid';
import styles from "./formProject.module.css";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    p: 4,
};

export default function FormProject() {
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
            <Typography id="modal-modal-title" variant="h6" component="h1">
                Adicionar projeto
            </Typography>

            <Grid container  sx={{mt: 1}}>
                <Grid item xs={6}>
                teste
                </Grid>
                
                <Grid item xs={6}>
                    <Input name="" label="Título" type="text" id=""/>
                    <Input name="" label="Tags" type="text" id=""/>
                    <Input name="" label="Link" type="text" id=""/>
                    <Input name="" label="Descrição" type="text" id=""/>
                </Grid>
                <Button 
                    variant="contained" 
                    size="large">
                    Salvar
                </Button>
                <Button 
                    onClick={handleClose}
                    variant="contained" 
                    size="large">
                    Cancelar
                </Button>
            </Grid>
          </Box>
        </Modal>
      </div>
    );
  }