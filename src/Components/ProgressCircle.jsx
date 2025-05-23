import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularSize() {
  return (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent={"center"} height={"90vh"}>
      <CircularProgress size="6rem" color='black'/>
    </Stack>
  );
}