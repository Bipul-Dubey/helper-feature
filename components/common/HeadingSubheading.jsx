import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function HeadingSubheading({ title = '', subtitle = '' }) {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        gap: 1,
      }}
    >
      <Typography variant="h4" align="center" color="#5e5d5d" lineHeight={1}>
        {title}
      </Typography>
      <Typography align="center" color="#7D7D7D" variant="h6" lineHeight={1}>
        {subtitle}
      </Typography>
    </Stack>
  );
}
