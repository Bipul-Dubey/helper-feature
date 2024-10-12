import FileViewer from '@/components/common/FileRenderer';
import FileUpload from '@/components/common/fileUpload';
import HeadingSubheading from '@/components/common/HeadingSubheading';
import Page from '@/components/common/Page';
import TypingEffectTextarea from '@/components/tool-component/TextAreaCopy';
import { DETAILED_FILE_TYPES } from '@/constant/fileTypes';
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

const FILE_TYPE_ALLOWED = [
  ...DETAILED_FILE_TYPES.audio.list,
  ...DETAILED_FILE_TYPES.image.list,
  ...DETAILED_FILE_TYPES.video.list,
  DETAILED_FILE_TYPES.document.documents.PDF,
];

export default function ImageToBase64() {
  const [fileDetails, setFileDetails] = useState(null);
  const [file, setFile] = useState(null);
  const [convertError, setConvertError] = useState(null);
  const [convertData, setConvertData] = useState(null);

  const onFileUpload = (details, file) => {
    setFileDetails(details);
    setFile(file);

    if (details?.size?.mb?.split(' ')?.at(0) > 10) {
      setConvertError(
        'File size is to large it takes time to convert, or may be hang!!'
      );
    }
  };

  const onConvertToBase64 = async () => {
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
          title="Convert Files to Base64 Encoding"
          subtitle="Easily transform your files into Base64 encoded strings for safe data transmission and storage"
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
              allowedTypes={FILE_TYPE_ALLOWED}
            />
          )}
          {fileDetails && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <FileViewer file={file} />
              <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Stack flexDirection={'row'} gap={1} color={'#6d6d6d'}>
                  <Typography>{fileDetails.name}</Typography>|
                  <Typography>{fileDetails.type?.split('/').at(1)}</Typography>|
                  <Typography>{fileDetails.size.kb}</Typography>
                </Stack>
                <IconButton
                  sx={{
                    backgroundColor: '#fff',
                  }}
                  onClick={handleReset}
                >
                  <Trash size={24} color="#000" />
                </IconButton>
              </Stack>

              <Button
                variant="contained"
                endIcon={<ArrowRight size={28} />}
                onClick={onConvertToBase64}
              >
                Convert to Base64
              </Button>

              {convertError && (
                <Typography variant="body1" color="warning" align="center">
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
