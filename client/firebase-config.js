import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAb4uxs2KTRHBHNaVyQs97QCtJAiP5C7b4",
  authDomain: "testphone-2dd93.firebaseapp.com",
  projectId: "testphone-2dd93",
  storageBucket: "testphone-2dd93.appspot.com",
  messagingSenderId: "152009469241",
  appId: "1:152009469241:web:cee62df18840e84c130ce8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
