import { Box, Stack } from '@mui/material';
import React from 'react';
import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

export default function Page({ children }) {
  return (
    <Stack minHeight="100vh">
      <Navbar />
      <Box flexGrow={1} paddingTop="64px" bgcolor={'#FAFAFA'}>
        {children}
      </Box>{' '}
      <Footer />
    </Stack>
  );
}
