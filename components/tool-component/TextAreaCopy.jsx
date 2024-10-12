import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, TextareaAutosize } from '@mui/material';
import { Copy } from 'phosphor-react';
import Swal from 'sweetalert2';

const TypingEffectTextarea = ({
  originalText = 'This is the text that appears as if it is being typed...',
  timeDelay = 10,
  typingEffect = true, // New prop to enable/disable typing effect
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
        ref={textareaRef}
        value={displayText}
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
      {!isTyping && (
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
