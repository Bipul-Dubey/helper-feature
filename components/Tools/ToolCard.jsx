import { Box, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import React, { useId } from 'react';

export default function ToolCard({ tool }) {
  const { title, subtitle, path, imageUrl } = tool;

  return (
    <Grid item xs={12} sm={6} md={4} key={useId()}>
      <Paper
        elevation={3}
        sx={{
          padding: '16px',
          height: '100%',
          border: '1px solid #cdcdcd',
          borderRadius: '4px',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.003)',
          },
          '&:active': {
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Click shadow effect
            transform: 'scale(0.98)', // Slight scale down on click
          },
          display: 'flex',
          gap: 3,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <img
          src={imageUrl}
          alt={`${title} logo`}
          loading="lazy"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: 6,
          }}
        />
        <Stack>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{subtitle}</Typography>
        </Stack>
      </Paper>
    </Grid>
  );
}
