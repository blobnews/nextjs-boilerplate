import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9oDnE0rsAaC6-ctVAigLBIqNUUo5mE1A",
    authDomain: "sissy-49471.firebaseapp.com",
    projectId: "sissy-49471",
    storageBucket: "sissy-49471.appspot.com",
    messagingSenderId: "304385411010",
    appId: "1:304385411010:web:83638edf013ca48f57f85b"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
