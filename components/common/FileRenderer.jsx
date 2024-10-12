import { Box, Stack } from '@mui/material';
import React from 'react';

const FileViewer = ({ file }) => {
  const { name, type } = file;
  console.log("type.startsWith('audio/'): ", type.startsWith('audio/'));

  return (
    <Stack>
      {(() => {
        switch (true) {
          case type.startsWith('image/'):
            return (
              <Box
                component="img"
                src={URL.createObjectURL(file)}
                alt="Selected file"
                sx={{
                  borderRadius: 1,
                  maxHeight: '450px',
                  maxWidth: '450px',
                }}
              />
            );

          case type === 'application/pdf':
            return (
              <Box
                component={'iframe'}
                src={URL.createObjectURL(file)}
                title={name}
                width="450px"
                height={'450px'}
                maxHeight="500px"
                maxWidth="600px"
              />
            );

          case type.startsWith('video/'):
            return (
              <Box
                component={'video'}
                controls
                style={{ maxWidth: '500px', maxHeight: '500px' }}
              >
                <source src={URL.createObjectURL(file)} type={type} />
                Your browser does not support the video tag.
              </Box>
            );

          case type.startsWith('audio/'):
            return (
              <Box
                component={'audio'}
                controls
                sx={{
                  width: '100%',
                }}
              >
                <source src={URL.createObjectURL(file)} type={type} />
                Your browser does not support the audio element.
              </Box>
            );

          default:
            break;
        }
      })()}
    </Stack>
  );
};

export default FileViewer;
