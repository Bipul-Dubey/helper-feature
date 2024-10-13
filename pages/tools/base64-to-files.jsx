import HeadingSubheading from '@/components/common/HeadingSubheading';
import Page from '@/components/common/Page';
import TypingEffectTextarea from '@/components/tool-component/TextAreaCopy';
import FileViewer from '@/components/Tools/FileRenderer';
import { base64ToFile } from '@/utilities/files_utils';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { ArrowRight } from 'phosphor-react';
import React, { useState } from 'react';
import { FILE_TYPE_ALLOWED } from './files-to-base64';

export default function Base64ToFiles() {
  const [base64String, setBase64String] = useState('');
  const [file, setFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);

  const handleBase64ToFile = () => {
    if (!base64String) return;
    const file = base64ToFile(base64String, '', selectedFileType);
    console.log('file : ', file);
    if (file) {
      setFile(file);
    }
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
          title="Convert Base64 to file Decoding"
          subtitle="Easily decode Base64 strings back into their original file format with a simple and quick tool."
        />
      </Stack>
      <Stack padding={'10px 30px'} width={'100%'} gap={2}>
        <TypingEffectTextarea
          originalText={base64String}
          typingEffect={false}
          onChange={(data) => {
            setBase64String(data);
          }}
        />
        {!!base64String && (
          <Stack
            sx={{
              flexDirection: {
                md: 'row',
              },
            }}
            justifyContent={'space-between'}
            gap={2}
          >
            <Autocomplete
              fullWidth
              size="small"
              renderInput={(props) => <TextField size="small" {...props} />}
              options={FILE_TYPE_ALLOWED}
              onChange={(e, val) => {
                setSelectedFileType(val);
              }}
            />
            {selectedFileType && (
              <Button
                sx={{
                  minWidth: '250px',
                }}
                variant="contained"
                onClick={handleBase64ToFile}
              >
                Convert from Base64 <ArrowRight />
              </Button>
            )}
          </Stack>
        )}

        {file && <FileViewer file={file} downloadable />}
      </Stack>
    </Page>
  );
}
