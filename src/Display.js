// src/components/Display.js
import React from 'react';

const Display = ({ currentSound }) => {
  return (
    <div id="display">
      {currentSound}
    </div>
  );
};

export default Display;
