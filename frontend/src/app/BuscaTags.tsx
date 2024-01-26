import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function FullWidthTextField() {
  return (
    <Box
      style={{
        width: 500,
        maxWidth: '100%',
      }}
    >
        <Typography gutterBottom variant="h5" component="div" style={{
            color: "#0B0C0D",
            lineHeight: 2,
            fontSize: 20,
            opacity: 0.6
        }}>
            Meus projetos
        </Typography>

      <TextField fullWidth label="Buscar tags" id="fullWidth" />
    </Box>
  );
}