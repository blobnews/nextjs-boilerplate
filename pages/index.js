import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import PhotoEditor from '../components/PhotoEditor';

const Home = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      {!selectedPhoto && <Gallery setSelectedPhoto={setSelectedPhoto} />}
      {selectedPhoto && <PhotoEditor photo={selectedPhoto} />}
    </div>
  );
};

export default Home;