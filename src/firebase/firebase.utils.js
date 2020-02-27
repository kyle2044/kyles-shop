import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9bPcqUwEH94qKuPJaeFcT7e7Vd_rABcI",
    authDomain: "kyleshop-db.firebaseapp.com",
    databaseURL: "https://kyleshop-db.firebaseio.com",
    projectId: "kyleshop-db",
    storageBucket: "kyleshop-db.appspot.com",
    messagingSenderId: "493946952483",
    appId: "1:493946952483:web:8fb9888e361d4d698cca96",
    measurementId: "G-XDRZFNYL9S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;