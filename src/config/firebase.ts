import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7JWw8aaBN-wLEWVwus9vHPfjLROnG8dY",
  authDomain: "hogentmobileappproject.firebaseapp.com",
  projectId: "hogentmobileappproject",
  storageBucket: "hogentmobileappproject.appspot.com",
  messagingSenderId: "181244588054",
  appId: "1:181244588054:web:ac893cfdf31c9a4daf0537"
};

export const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export default firebaseConfig;
export const auth = getAuth(app);
export const db = getFirestore(app);
