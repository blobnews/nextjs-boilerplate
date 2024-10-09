import React, { useState } from 'react';

const PhotoEditor = ({ photo }) => {
  const [text, setText] = useState('');
  const [editedPhotoUrl, setEditedPhotoUrl] = useState(photo.url);

  const addTextToPhoto = () => {
    // For the MVP, we'll just overlay the text visually without modifying the image itself.
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.src = photo.url;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.font = '40px Arial';
      ctx.fillStyle = 'pink';
      ctx.fillText(text, 50, 50);
      setEditedPhotoUrl(canvas.toDataURL());
    };
  };

  return (
    <div className="photo-editor">
      <img src={editedPhotoUrl} alt="Edited Photo" />
      <input
        type="text"
        placeholder="Add your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTextToPhoto}>Add Text</button>
    </div>
  );
};

export default PhotoEditor;