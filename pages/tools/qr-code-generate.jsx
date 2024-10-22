import FileUpload from '@/components/common/fileUpload';
import HeadingSubheading from '@/components/common/HeadingSubheading';
import Page from '@/components/common/Page';
import {
  Box,
  Button,
  Checkbox,
  Slider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Alert, QRCode } from 'antd';
import { Download } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

export default function QRCodeGenerate() {
  const MIN_QR_SIZE = 200;
  const MAX_QR_SIZE = 500;

  const [qrData, setQrData] = useState('');
  const [size, setSize] = useState(MIN_QR_SIZE);
  const [isEmbedImage, setIsEmbedImage] = useState(false);
  const [file, setFile] = useState('');
  const [error, setError] = useState('');
  const [embedImageSize, setEmbedImageSize] = useState(MIN_QR_SIZE / 8);

  const handleIncreateQrSize = () => {};

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  function doDownload(url, fileName) {
    const a = document.createElement('a');
    a.download = fileName;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const downloadCanvasQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      doDownload(url, `${qrData}.png`);
    }
  };

  const handleSliderChange = (event, newValue) => {
    if (newValue < MIN_QR_SIZE) {
      setError(`Min. size of QR is ${MIN_QR_SIZE}px`);
    } else if (newValue > MAX_QR_SIZE) {
      setError(`Max. size of QR is ${MAX_QR_SIZE}px`);
    } else {
      setError('');
      setSize(newValue);
    }
  };

  const handleEmbedImageSliderChange = (event, newValue) => {
    setEmbedImageSize(newValue);
  };

  return (
    <Page>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          gap: 3,
        }}
      >
        <HeadingSubheading
          title="QR Code Generator with Image Embedding"
          subtitle="Create and customize QR codes from text, add embedded images for enhanced branding"
        />
        <Stack
          sx={{
            width: {
              sm: '100%',
              md: '70%',
              lg: '50%',
            },
          }}
          gap={2}
        >
          <TextField
            size="small"
            label="Qr Code Text"
            onChange={(e) => setQrData(e.target.value)}
            fullWidth
          />
          <Stack
            width={'100%'}
            justifyContent={'center'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <Typography>Embed Image</Typography>
            <Checkbox
              checked={isEmbedImage}
              onClick={(e) => {
                const isChecked = e.target.checked;

                if (!isChecked) {
                  setFile('');
                }

                setIsEmbedImage((prev) => !prev);
              }}
            />
            {isEmbedImage && (
              <Stack>
                <FileUpload
                  onFileUpload={(_, file) => setFile(URL.createObjectURL(file))}
                />
              </Stack>
            )}
          </Stack>
        </Stack>
        <Stack height={'100%'} width={'100%'} alignItems={'center'} gap={2}>
          {qrData && (
            <Stack
              sx={{
                flexDirection: {
                  lg: 'row',
                  md: 'row',
                  sm: 'column',
                },
              }}
              gap={4}
            >
              <Box sx={{ width: 300, mt: 2 }}>
                <Typography gutterBottom>QR Code Size: {size}px</Typography>
                <Slider
                  value={size}
                  min={MIN_QR_SIZE}
                  max={MAX_QR_SIZE}
                  onChange={handleSliderChange}
                  aria-labelledby="qr-size-slider"
                  valueLabelDisplay="auto"
                />
              </Box>
              {embedImageSize && file && (
                <Box sx={{ width: 300, mt: 2 }}>
                  <Typography gutterBottom>
                    Embed Image Size: {embedImageSize}px
                  </Typography>
                  <Slider
                    value={embedImageSize}
                    min={MIN_QR_SIZE / 8}
                    max={MAX_QR_SIZE / 5}
                    onChange={handleEmbedImageSliderChange}
                    aria-labelledby="qr-size-slider"
                    valueLabelDisplay="auto"
                  />
                  <Alert
                    type="warning"
                    message="Better to keep it small"
                    closable
                  />
                </Box>
              )}
            </Stack>
          )}
          {qrData && error && (
            <Alert
              closeIcon
              closable
              message="Error"
              description={error}
              type="error"
              showIcon
              onClose={() => setError('')}
            />
          )}
          <Stack my={3} gap={2}>
            <QRCode
              id="myqrcode"
              size={size}
              type="canvas"
              value={qrData}
              icon={file}
              iconSize={embedImageSize}
            />
            <Button
              startIcon={<Download />}
              variant="contained"
              onClick={downloadCanvasQRCode}
            >
              Download
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Page>
  );
}
