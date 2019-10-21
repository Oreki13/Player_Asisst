import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF2pDbgoMb3tR9v325ZeDwxZjndWcNkqQ",
  authDomain: "player-tracker-781ad.firebaseapp.com",
  databaseURL: "https://player-tracker-781ad.firebaseio.com",
  projectId: "player-tracker-781ad",
  storageBucket: "player-tracker-781ad.appspot.com",
  messagingSenderId: "239538564074",
  appId: "1:239538564074:web:7917772879934726206093"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
