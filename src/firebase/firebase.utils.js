import  firebase from 'firebase/compat/app';
//import { auth } from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyD6JQJndHK4gqvlyiY9QJOM4XqgybQefrg",
    authDomain: "crwn-clothing-acea7.firebaseapp.com",
    projectId: "crwn-clothing-acea7",
    storageBucket: "crwn-clothing-acea7.appspot.com",
    messagingSenderId: "445858307725",
    appId: "1:445858307725:web:bf4e9619cb727d2597ccc4",
    measurementId: "G-3W74F4PXV1"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;

  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;