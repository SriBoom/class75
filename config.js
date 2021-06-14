import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDjKAIfwpEBbkuzgBYD522WVlGcJiuW2iU",
  authDomain: "wily-app-7a93e.firebaseapp.com",
  projectId: "wily-app-7a93e",
  storageBucket: "wily-app-7a93e.appspot.com",
  messagingSenderId: "836025592643",
  appId: "1:836025592643:web:8fdfa58815a5f4552a9df6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();