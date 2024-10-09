import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

const Gallery = ({ setSelectedPhoto }) => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('/api/photos')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  const handleNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleEditPhoto = () => {
    setSelectedPhoto(photos[currentIndex]);
  };

  return (
    <div className={styles.galleryContainer}>
      {photos.length > 0 && (
        <div className={styles.photoContainer}>
          <img className={styles.photo} src={photos[currentIndex].url} alt={photos[currentIndex].id} />
          <div className={styles.galleryControls}>
            <button onClick={handleNextPhoto}>Next</button>
            <button onClick={handleEditPhoto}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );

};

export default Gallery;