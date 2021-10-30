import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABcWB_bIMms8j7GeSe41aoXxcR3nxWsss",
  authDomain: "libreriasheridan.firebaseapp.com",
  projectId: "libreriasheridan",
  storageBucket: "libreriasheridan.appspot.com",
  messagingSenderId: "330927727075",
  appId: "1:330927727075:web:f6e767b91232b632f8c0d6",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};
