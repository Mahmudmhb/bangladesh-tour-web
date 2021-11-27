import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const initializetionAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializetionAuthentication;