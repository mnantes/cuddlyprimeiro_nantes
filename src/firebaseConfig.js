import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeeaZpjEBhSH8bxbomNsCpOd_nwdxbWsc",
    authDomain: "cuddlycloud-aa673.firebaseapp.com",
    projectId: "cuddlycloud-aa673",
    storageBucket: "cuddlycloud-aa673.appspot.com",
    messagingSenderId: "625413454903",
    appId: "1:625413454903:web:e0d0d66c3434881332d3b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
