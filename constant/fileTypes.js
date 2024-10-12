export const DETAILED_FILE_TYPES = {
  image: {
    category: 'image',
    list: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/svg+xml',
      'image/bmp',
      'image/webp',
      'image/tiff',
      'image/x-icon',
    ],
    images: {
      JPEG: 'image/jpeg',
      PNG: 'image/png',
      GIF: 'image/gif',
      SVG: 'image/svg+xml',
      BMP: 'image/bmp',
      WebP: 'image/webp',
      TIFF: 'image/tiff',
      Icon: 'image/x-icon',
    },
  },

  video: {
    category: 'video',
    list: [
      'video/mp4',
      'video/webm',
      'video/ogg',
      'video/x-msvideo',
      'video/x-flv',
      'video/x-matroska',
      'video/quicktime',
      'video/x-ms-wmv',
    ],
    videos: {
      MP4: 'video/mp4',
      WebM: 'video/webm',
      Ogg: 'video/ogg',
      AVI: 'video/x-msvideo',
      FLV: 'video/x-flv',
      MKV: 'video/x-matroska',
      MOV: 'video/quicktime',
      WMV: 'video/x-ms-wmv',
    },
  },

  audio: {
    category: 'audio',
    list: [
      'audio/mpeg',
      'audio/ogg',
      'audio/wav',
      'audio/flac',
      'audio/aac',
      'audio/x-m4a',
      'audio/webm',
      'audio/x-wav',
    ],
    audios: {
      MP3: 'audio/mpeg',
      Ogg: 'audio/ogg',
      WAV: 'audio/wav',
      FLAC: 'audio/flac',
      AAC: 'audio/aac',
      M4A: 'audio/x-m4a',
      WebM: 'audio/webm',
      WAV_X: 'audio/x-wav',
    },
  },

  document: {
    category: 'document',
    list: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/plain',
      'text/html',
      'application/rtf',
    ],
    documents: {
      PDF: 'application/pdf',
      DOC: 'application/msword',
      DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      XLS: 'application/vnd.ms-excel',
      XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      PPT: 'application/vnd.ms-powerpoint',
      PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      TXT: 'text/plain',
      HTML: 'text/html',
      RTF: 'application/rtf',
    },
  },

  '*': {
    category: '*',
    list: ['*/*'],
    wildcard: {
      Any: '*/*',
    },
  },
};

export const ALLOWED_FILE_TYPE = {
  // Common image MIME types
  image: DETAILED_FILE_TYPES.image.list,

  // Common video MIME types
  video: DETAILED_FILE_TYPES.video.list,

  // Common audio MIME types
  audio: DETAILED_FILE_TYPES.audio.list,

  // Common document MIME types
  document: DETAILED_FILE_TYPES.document.list,

  // Wildcard for any file type
  '*': ['*/*'],
};
