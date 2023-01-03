
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCS-8SkcQpTAqELSWxGPFb8Cx6JFlmG3BQ",
  authDomain: "entrega-final-curso-react.firebaseapp.com",
  projectId: "entrega-final-curso-react",
  storageBucket: "entrega-final-curso-react.appspot.com",
  messagingSenderId: "625140151024",
  appId: "1:625140151024:web:60f7fb5aa64e99768bc835"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)