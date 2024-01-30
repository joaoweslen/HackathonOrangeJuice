import * as React from 'react';
import styles from './buscaTags.module.css'
import {Box, TextField} from '@mui/material';

export default function SeachField() {
  return (
    <Box>
      <TextField className={styles.seach} label="Buscar tags" />
    </Box>
  );
}