import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'photos'));
      const photos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(photos);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching photos', error });
    }
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
}