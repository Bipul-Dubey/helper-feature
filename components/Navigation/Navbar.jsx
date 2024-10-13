import React, { useId } from 'react';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { NAVIGATIONS } from '@/constant/navigations';
import ToolNavigation from './ToolNavigation';
import NavigationButton from './NavigationButton';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
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
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#f65858',
            },
          }}
          onClick={() => {
            router.push({
              pathname: '/',
            });
          }}
        >
          Easy Find
        </Typography>

        <Stack
          sx={{
            '&:hover': {
              color: '#FFD700',
            },
          }}
        >
          {NAVIGATIONS?.map((navigation) =>
            navigation.is_dropdown ? (
              <ToolNavigation key={useId()} navigation={navigation} />
            ) : (
              <NavigationButton key={useId()} navigation={navigation} />
            )
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
