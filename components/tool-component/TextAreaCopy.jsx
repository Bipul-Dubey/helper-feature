import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Skeleton, TextareaAutosize } from '@mui/material';
import { Copy } from 'phosphor-react';
import Swal from 'sweetalert2';

const TypingEffectTextarea = ({
  originalText = '',
  timeDelay = 10,
  typingEffect = true,
  readOnly = false,
  onChange = () => {},
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(typingEffect); // Initialize with typingEffect
  const textareaRef = useRef(null); // Reference to the textarea

  // Simulate typing effect if enabled
  useEffect(() => {
    if (typingEffect) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < originalText.length) {
          setDisplayText((prev) => prev + originalText[index]);
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false); // Stop typing effect
        }
      }, timeDelay); // Adjust typing speed here

      return () => clearInterval(typingInterval);
    } else {
      // If typing effect is disabled, set the displayText immediately
      setDisplayText(originalText);
      setIsTyping(false);
    }
  }, [originalText, timeDelay, typingEffect]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight; // Scroll to the bottom
    }
  }, [displayText]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(displayText)
      .then(() => {
        Swal.fire({
          title: 'Text copied',
          text: 'Base64 Text copied to clipboard!',
          icon: 'success',
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Text copied failed',
          text: err.message,
          icon: 'error',
          timer: 1500,
        });
      });
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', maxHeight: '500px' }}>
      <TextareaAutosize
        placeholder="Your text here..."
        ref={textareaRef}
        value={displayText}
        onChange={(e) => {
          if (readOnly) return;
          onChange(e.target.value);
          setDisplayText(e.target.value);
        }}
        minRows={5}
        style={{
          width: '100%',
          maxHeight: '500px',
          padding: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
          resize: 'none',
          outline: 'none',
          overflowY: 'scroll',
          boxSizing: 'border-box',
        }}
      />
      {!isTyping && displayText && (
        <IconButton
          onClick={handleCopy}
          sx={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: '#fff',
          }}
        >
          <Copy size={32} />
        </IconButton>
      )}
    </Box>
  );
};

export default TypingEffectTextarea;
