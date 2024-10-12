import FileUpload from '@/components/common/fileUpload';
import HeadingSubheading from '@/components/common/HeadingSubheading';
import Page from '@/components/common/Page';
import TypingEffectTextarea from '@/components/tool-component/TextAreaCopy';
import { ALLOWED_FILE_TYPE } from '@/constant/fileTypes';
import { convertImageToBase64 } from '@/utilities/images';
import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { ArrowRight, Trash } from 'phosphor-react';
import React, { useState } from 'react';

export default function ImageToBase64() {
  const [fileDetails, setFileDetails] = useState(null);
  const [file, setFile] = useState(null);
  const [convertError, setConvertError] = useState(null);
  const [convertData, setConvertData] = useState(null);

  const onFileUpload = (details, file) => {
    setFileDetails(details);
    setFile(file);
  };

  const onDeleteFile = () => {
    setFileDetails(null);
    setFile(null);
  };

  const onConvertToBase64 = async () => {
    console.log('file : ', file);

    if (!file) {
      setConvertError('Please provide file');
      return;
    }
    const response = await convertImageToBase64(file);
    if (response && response?.is_pass && response?.data) {
      setConvertError(null);
      setConvertData(response.data);
      setFile(null);
      setFileDetails(null);
    } else {
      setConvertData(null);
      setConvertData(null);
    }
  };

  const handleReset = () => {
    setFileDetails(null);
    setFile(null);
    setConvertData(null);
    setConvertError(null);
  };

  return (
    <Page>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <HeadingSubheading
          title="Convert Image Files to Base64 Encoding"
          subtitle="Easily transform your image files into Base64 encoded strings for safe data transmission and storage"
        />
        <Card
          sx={{
            m: 3,
            p: 2,
            width: '100%',
            maxWidth: convertData ? '890px' : 'fit-content',
          }}
        >
          {!convertData && !fileDetails && (
            <FileUpload
              onFileUpload={onFileUpload}
              allowedTypes={ALLOWED_FILE_TYPE.image}
            />
          )}
          {fileDetails && fileDetails.type.startsWith('image/') && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                position: 'relative', // Set position relative
              }}
            >
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '50%', // Center vertically
                  left: '50%', // Center horizontally
                  transform: 'translate(-50%, -50%)', // Adjust to truly center the button
                  backgroundColor: '#fff',
                }}
                onClick={onDeleteFile}
              >
                <Trash size={50} color="#000" />
              </IconButton>

              <Box
                component="img"
                src={fileDetails.url}
                alt="Selected file"
                sx={{
                  borderRadius: 1,
                  maxHeight: '450px',
                  maxWidth: '450px',
                }}
              />

              <Button
                variant="contained"
                endIcon={<ArrowRight size={28} />}
                onClick={onConvertToBase64}
              >
                Convert to Base64
              </Button>

              {convertError && (
                <Typography variant="h6" color="warning" align="center">
                  {convertError}
                </Typography>
              )}
            </Box>
          )}
          {!convertError && convertData && (
            <Stack gap={2}>
              <TypingEffectTextarea
                originalText={convertData}
                timeDelay={1}
                typingEffect={false}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button variant="contained" size="large" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </Stack>
          )}
        </Card>
      </Stack>
    </Page>
  );
}
