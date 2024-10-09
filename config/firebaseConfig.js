import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBVregnc2xvK_Ss2PqKOO_R5DhGiXmLbbU",
  authDomain: "sissynew-c97f7.firebaseapp.com",
  projectId: "sissynew-c97f7",
  storageBucket: "sissynew-c97f7.appspot.com",
  messagingSenderId: "353897445342",
  appId: "1:353897445342:web:4f566efb9a9fc7da43cf4f"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
