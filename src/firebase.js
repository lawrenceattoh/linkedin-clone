import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmwFm0SDx6tIn5Yu6fCr747FQPM_3yoks",
    authDomain: "linkedin-clone-9c2fe.firebaseapp.com",
    projectId: "linkedin-clone-9c2fe",
    storageBucket: "linkedin-clone-9c2fe.appspot.com",
    messagingSenderId: "195389615552",
    appId: "1:195389615552:web:d78cc676392d796c34ac25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth };