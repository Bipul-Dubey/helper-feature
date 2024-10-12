import { PATHS } from './paths';

const CATEGORY = {
  To_base64: 'To base64',
  To_image: 'To Image',
};

export const TOOL_List = [
  {
    category: CATEGORY.To_base64,
    title: 'To Base64 encoded',
    subtitle: 'Convert files to base64 encoding',
    path: PATHS.TOOLS.FilesToBase64,
    imageUrl: '/tool-images/image_base64.jpg',
  },
  {
    category: CATEGORY.To_image,
    title: 'Base64 to Image',
    subtitle: 'Convert base64 encoding to images',
    path: PATHS.TOOLS.Base64ToImage,
    imageUrl: '/tool-images/base64_image.webp',
  },
];

export const UP_COMING = [
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
