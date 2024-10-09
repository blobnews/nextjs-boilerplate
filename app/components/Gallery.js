import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = ({ setSelectedPhoto }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-container" onClick={() => setSelectedPhoto(photo)}>
          <img src={photo.url} alt={photo.tags.join(', ')} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;