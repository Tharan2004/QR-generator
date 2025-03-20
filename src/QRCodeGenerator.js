import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="qr-code-container">
      <h2>QR Code Generator</h2>

      <input
        type="text"
        placeholder="Enter text to generate QR Code"
        value={inputValue}
        onChange={handleInputChange}
      />

      <div className="qr-code-display">
        {inputValue && <QRCodeCanvas value={inputValue} size={256} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;

