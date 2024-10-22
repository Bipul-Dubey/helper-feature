import React, { useRef, useState } from 'react';
import {
  Stack,
  Container,
  Menu,
  Paper,
  Typography,
  Grid2,
} from '@mui/material';
import NavigationButton from './NavigationButton';
import { CaretDown } from 'phosphor-react';
import { TOOL_List } from '@/constant/tools';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

function ToolNavigationContainer() {
  const router = useRouter();

  return (
    <Container maxWidth="md">
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {TOOL_List.map((tool, index) => (
          <Grid2 size={4}>
            <Paper
              key={index}
              elevation={1}
              sx={{
                flexBasis: 'calc(33.3333% - 12px)', // Each item takes 1/3rd of the width minus spacing
                padding: 1.5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                transition: '0.2s',
                '&:hover': {
                  boxShadow: 3,
                },
                cursor: 'pointer',
                mb: 1.5, // margin-bottom for vertical spacing between rows
              }}
              onClick={() => {
                router.push({
                  pathname: tool.path,
                });
              }}
            >
              <Box
                component="img"
                src={tool.imageUrl}
                alt={tool.title}
                sx={{
                  width: 35,
                  height: 35,
                  objectFit: 'cover',
                  borderRadius: 1,
                }}
              />
              <Box ml={1}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: 14, lineHeight: 1.2 }}
                >
                  {tool.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{ fontSize: 12, lineHeight: 1.1 }}
                >
                  {tool.subtitle}
                </Typography>
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

const MenuComponent = ({ anchorEl, open }) => {
  return (
    <Menu open={open} anchorEl={anchorEl}>
      <ToolNavigationContainer />
    </Menu>
  );
};

export default function ToolNavigation({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Stack
      flexDirection="row"
      gap={0.7}
      alignItems="center"
      onClick={handleToggle}
      ref={ref}
      sx={{ position: 'relative', color: isOpen ? "#FFD700'" : '' }}
    >
      <NavigationButton navigation={navigation} />
      <CaretDown
        size={24}
        style={{
          rotate: isOpen ? '180deg' : '0deg',
        }}
      />
      <MenuComponent
        open={isOpen}
        anchorEl={ref.current}
        handleClose={handleClose}
      />
    </Stack>
  );
}
