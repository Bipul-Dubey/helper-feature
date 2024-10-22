import React, { useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { UploadSimple } from 'phosphor-react';
import { ALLOWED_FILE_TYPE } from '@/constant/fileTypes';

const FileUpload = ({ allowedTypes = ['*'], onFileUpload }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileDetails, setFileDetails] = useState(null);
  const [error, setError] = useState('');

  // Convert the allowed types to MIME types based on the provided keywords or MIME types
  const getMimeTypes = (types) => {
    const mimeTypes = types.flatMap((type) =>
      ALLOWED_FILE_TYPE[type] ? ALLOWED_FILE_TYPE[type] : [type]
    );
    return mimeTypes;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFileValidation(file);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileValidation(file);
  };

  const handleFileValidation = (file) => {
    const mimeTypes = getMimeTypes(allowedTypes);
    if (file && (mimeTypes.includes('*/*') || mimeTypes.includes(file.type))) {
      setError('');
      setLoading(true);
      setSelectedFile(file);

      setTimeout(() => {
        setLoading(false);
        const fileSizeInKB = (file.size / 1024).toFixed(2); // Convert size to KB
        const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2); // Convert size to MB

        const fileData = {
          url: URL.createObjectURL(file),
          name: file.name,
          size: {
            kb: `${fileSizeInKB} KB`,
            mb: `${fileSizeInMB} MB`,
          },
          type: file.type,
        };
        setFileDetails(fileData);
        if (onFileUpload) {
          onFileUpload(fileData, file);
        }
      }, 2000);
    } else {
      setError('File type not supported');
      setSelectedFile(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 3,
        border: '2px dashed #ccc',
        borderRadius: 2,
        textAlign: 'center',
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f9f9f9',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => document.getElementById('file-upload').click()}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
    >
      <input
        accept={getMimeTypes(allowedTypes).join(', ')}
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Box
        sx={{
          width: '300px',
        }}
      >
        <UploadSimple size={32} />
        <Typography variant="h6">
          {loading ? 'Uploading...' : 'Drag & Drop or Click to Upload'}
        </Typography>
      </Box>

      {selectedFile && !loading && fileDetails && (
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            fontSize: '14px',
            wordBreak: 'break-word',
          }}
        >
          {fileDetails.name}
          {fileDetails.size &&
            !isNaN(fileDetails.size) &&
            `(${(fileDetails.size / 1024).toFixed(2)} KB)`}
        </Typography>
      )}

      {loading && (
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size={24} />
        </Box>
      )}

      {error && (
        <Typography
          color="error"
          variant="body2"
          sx={{
            mt: 2,
            fontSize: '12px',
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default FileUpload;
