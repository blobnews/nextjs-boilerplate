import { photos } from '../../data/photos.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(photos);
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
}