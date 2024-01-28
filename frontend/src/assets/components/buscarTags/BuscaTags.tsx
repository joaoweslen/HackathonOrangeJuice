import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      style={{
        width: 500,
        maxWidth: '100%',
      }}
    >

      <TextField fullWidth label="Buscar tags" id="fullWidth" />
    </Box>
  );
}