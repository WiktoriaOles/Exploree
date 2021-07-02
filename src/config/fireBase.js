import firebase from "firebase";
export const firebaseConfig = {
  apiKey: "AIzaSyAoROM92z8ca1eaLJU3--_9EtXQERev9fI",
  authDomain: "react-crud-cad40.firebaseapp.com",
  databaseURL:
    "https://react-crud-cad40-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-crud-cad40",
  storageBucket: "react-crud-cad40.appspot.com",
  messagingSenderId: "666317052817",
  appId: "1:666317052817:web:fdd0428d6f10f592f19830",
};

const Db = firebase.initializeApp(firebaseConfig);

export default Db.database().ref();
