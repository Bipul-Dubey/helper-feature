export function convertImageToBase64(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    // Event triggered when the file reading is complete
    reader.onloadend = () => {
      resolve({ is_pass: true, data: reader.result }); // Return success object
    };

    // Event triggered if there is an error during the reading process
    reader.onerror = () => {
      resolve({ is_pass: false, data: null }); // Return failure object
    };

    // Read the file as a data URL (base64 format)
    reader.readAsDataURL(file);
  });
}

export function formatFileName(fileName, maxLength = 20) {
  if (!fileName) return '';
  if (fileName.length <= maxLength) {
    return fileName; // Return the original string if it's within the length limit
  }

  // Get the first 10 characters and last 7 characters
  const firstPart = fileName.substring(0, 10);
  const lastPart = fileName.substring(fileName.length - 7);

  // Combine parts with ellipses
  return `${firstPart}...${lastPart}`;
}

export function base64ToFile(base64String, fileName = '', fileType = '') {
  // Define a default MIME type if none is provided or extractable
  const defaultMimeType = 'image/webp'; // Generic binary type for unknown file types
  const mimeType = fileType || defaultMimeType;

  // Generate a default file extension based on MIME type if possible
  const defaultExtension = mimeType.split('/')[1] || 'bin'; // Use 'bin' if no extension is derived
  const defaultFileName = `file_${Date.now()}.${defaultExtension}`;

  // Decode the Base64 string (split at comma in case it's a complete data URI)
  const byteString = atob(base64String.split(',').pop()); // Handle if it's plain or with prefix
  const byteNumbers = new Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    byteNumbers[i] = byteString.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);

  // Create a file with the default name and type if not provided
  const file = new File([byteArray], fileName || defaultFileName, {
    type: mimeType,
  });

  return file;
}
