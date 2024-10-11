import React from 'react';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { NAVIGATIONS } from '@/constant/navigations';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#333333',
      }}
    >
      <Toolbar
        sx={{
          gap: 5,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Easy Find
        </Typography>

        <Stack
          sx={{
            '&:hover': {
              color: '#FFD700',
            },
          }}
        >
          {NAVIGATIONS?.map((navigation) => (
            <Stack>
              <Typography variant="h6">{navigation.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
