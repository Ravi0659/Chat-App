import React from 'react';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBtArG4B1iwZLu7NgkbnBshp2P_eBfPNNg",
    authDomain: "chatapp-98c06.firebaseapp.com",
    projectId: "chatapp-98c06",
    storageBucket: "chatapp-98c06.appspot.com",
    messagingSenderId: "1066472404787",
    appId: "1:1066472404787:web:8abb791357974dc75d3046"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  export default firebase ;
