import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdiRz_cwYXMdcOajZsIXAEEebm3r5uIUA",
    authDomain: "whatsapp-b3b14.firebaseapp.com",
    projectId: "whatsapp-b3b14",
    storageBucket: "whatsapp-b3b14.appspot.com",
    messagingSenderId: "750439924811",
    appId: "1:750439924811:web:6686709ce783d9846e39ce"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider}
