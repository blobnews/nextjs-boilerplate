import { listAll, ref as storageRef, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig'; // Import storage instance

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const listRef = storageRef(storage, 'photos');
      console.log('List Ref:', listRef); // Debugging: Check the listRef

      const list = await listAll(listRef);
      console.log('List Items:', list.items); // Debugging: Check the list items

      const photos = await Promise.all(
        list.items.map(async (itemRef) => {
          try {
            const url = await getDownloadURL(itemRef);
            return { id: itemRef.name, url };
          } catch (err) {
            console.error('Failed to get download URL:', err.message);
            return null; // Skip this photo if there's an error
          }
        })
      );

      const validPhotos = photos.filter(photo => photo !== null);
      console.log('Valid Photos:', validPhotos); // Debugging: Check the valid photos

      res.status(200).json(validPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error.message || error);
      res.status(500).json({ message: 'Error fetching photos', error: error.message || error });
    }
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
}
