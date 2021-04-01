import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const confg ={
        apiKey: "AIzaSyBzhaSYm9s0aZRDWF-r_Xi-NogkaAW6Q1s",
        authDomain: "crown-db-384fc.firebaseapp.com",
        projectId: "crown-db-384fc",
        storageBucket: "crown-db-384fc.appspot.com",
        messagingSenderId: "1045727705337",
        appId: "1:1045727705337:web:bdddf762148f4532348a28",
        measurementId: "G-67BRL45XJF"
};

firebase.initializeApp(confg);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);

export default firebase;