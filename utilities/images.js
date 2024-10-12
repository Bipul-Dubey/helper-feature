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
