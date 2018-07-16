import firebase from "firebase";
const config = {
    apiKey: "AIzaSyAaJwJVOjqSaA3gOe3UMryW2dX_pNZ9Jjc",
    authDomain: "grimoire-paper-radio.firebaseapp.com",
    databaseURL: "https://grimoire-paper-radio.firebaseio.com",
    projectId: "grimoire-paper-radio",
    storageBucket: "grimoire-paper-radio.appspot.com",
    messagingSenderId: "69018715231"
};
firebase.initializeApp(config);
export default firebase;
