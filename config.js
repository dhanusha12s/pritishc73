import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  var firebaseConfig = {
    apiKey: "AIzaSyCzFMzpvDXZgqEMtSb7NNpccdSsk0APLo0",
    authDomain: "wireless-library-d9e93.firebaseapp.com",
    databaseURL: "https://wireless-library-d9e93.firebaseio.com",
    projectId: "wireless-library-d9e93",
    storageBucket: "wireless-library-d9e93.appspot.com",
    messagingSenderId: "623528105425",
    appId: "1:623528105425:web:45a0ab504b9fb8abda3cf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
