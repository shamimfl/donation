import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPjL3TA5sJtXDCwOcnHVxWHCAevJwO1s0",
  authDomain: "help-room-an-orphan-found.firebaseapp.com",
  projectId: "help-room-an-orphan-found",
  storageBucket: "help-room-an-orphan-found.appspot.com",
  messagingSenderId: "911853189384",
  appId: "1:911853189384:web:b87888e4488f0b977954bd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
