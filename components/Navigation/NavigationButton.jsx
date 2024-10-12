import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function NavigationButton({ navigation }) {
  return (
    <Stack color={'inherit'}>
      <Typography variant="h6">{navigation.name}</Typography>
    </Stack>
  );
}
