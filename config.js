import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB_sXUbB1ODDpriO1UGrwueUH_JDkhNpG8",
    authDomain: "time-stamp-f48c6.firebaseapp.com",
    databaseURL: "https://time-stamp-f48c6.firebaseio.com",
    projectId: "time-stamp-f48c6",
    storageBucket: "time-stamp-f48c6.appspot.com",
    messagingSenderId: "990000764402",
    appId: "1:990000764402:web:7c63d7d5d1b8ab890ec76b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();