import {
  Box,
  IconButton,
  Stack,
  CircularProgress,
  Typography,
} from '@mui/material';
import { DownloadSimple } from 'phosphor-react';
import React, { useState } from 'react';

const FileViewer = ({ file, downloadable = false }) => {
  const { name, type } = file;
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [downloadProgress, setDownloadProgress] = useState(0); // Track download percentage

  // Simulate file download with loading progress
  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement('a');
    const url = URL.createObjectURL(file);
    link.href = url;
    link.download = name;

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setDownloadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        link.click();
        URL.revokeObjectURL(url); // Clean up the URL after the download
        setIsLoading(false); // Reset loading state
      }
    }, 200); // Simulating download progress in steps of 10% every 200ms

    document.body.appendChild(link);
    document.body.removeChild(link);
  };

  return (
    <Stack gap={2}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {(() => {
          switch (true) {
            case type.startsWith('image/'):
              return (
                <Box
                  component="img"
                  src={URL.createObjectURL(file)}
                  alt={`Selected file ${name}`}
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
                <Box sx={{ width: '100%' }}>
                  <audio controls>
                    <source
                      src={URL.createObjectURL(file)}
                      type={type}
                      onError={() => {
                        console.log('not supported');
                      }}
                    />
                    Your browser does not support the audio element.
                  </audio>
                </Box>
              );

            default:
              break;
          }
        })()}
      </Box>

      {/* Show download button or progress */}
      {downloadable && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {isLoading ? (
            <>
              <CircularProgress
                variant="determinate"
                value={downloadProgress}
              />
              <Typography mt={1}>{downloadProgress}%</Typography>
            </>
          ) : (
            <IconButton onClick={handleDownload}>
              <DownloadSimple size={34} />
            </IconButton>
          )}
        </Box>
      )}
    </Stack>
  );
};

export default FileViewer;
