import { Stack } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Stack
      width={'100%'}
      height={'40px'}
      bgcolor={'#fded91'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      EasyFind by Bipul Dubey
    </Stack>
  );
}
