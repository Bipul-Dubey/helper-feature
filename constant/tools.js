import { PATHS } from './paths';

const CATEGORY = {
  Base64: 'Base64 en/de-coding',
  Other: 'Other',
};

export const TOOL_List = [
  {
    title: 'To Base64 encoded',
    subtitle: 'Convert files to base64 encoding',
    path: PATHS.TOOLS.FilesToBase64,
    imageUrl: '/tool-images/to_base64.webp',
  },
  {
    title: 'From Base64 decode',
    subtitle: 'Convert base64 encoding to files',
    path: PATHS.TOOLS.Base64ToFiles,
    imageUrl: '/tool-images/from_base64.webp',
  },
  {
    title: 'QRCode generator',
    subtitle: 'Generate qr code from text, embed image into it',
    path: PATHS.TOOLS.QRCode_GENERATOR,
    imageUrl: '/tool-images/from_base64.webp',
  },
];

export const UP_COMING = [
  {
    category: CATEGORY.Other,
    title: 'URL Shortner',
    subtitle: 'Convert your long url in short',
    path: PATHS.TOOLS.URL_SHORTNER,
    imageUrl: '/tool-images/url_shortner.webp',
  },
  {
    title: 'Text Formatter',
    subtitle:
      'Format text with various options like uppercase, lowercase, and title case.',
    path: '/tools/text-formatter',
    imageUrl: '/images/text-formatter.png',
  },
  {
    title: 'URL Shortener',
    subtitle: 'Shorten long URLs for easy sharing and management.',
    path: '/tools/url-shortener',
    imageUrl: '/images/url-shortener.png',
  },
  {
    title: 'JSON Validator',
    subtitle: 'Validate and format JSON data for easy reading and debugging.',
    path: '/tools/json-validator',
    imageUrl: '/images/json-validator.png',
  },
  {
    title: 'HTML to Markdown',
    subtitle: 'Convert HTML content to Markdown format for easier editing.',
    path: '/tools/html-to-markdown',
    imageUrl: '/images/html-to-markdown.png',
  },
  {
    title: 'CSS Minifier',
    subtitle: 'Minify your CSS files to reduce size and improve loading times.',
    path: '/tools/css-minifier',
    imageUrl: '/images/css-minifier.png',
  },
];
