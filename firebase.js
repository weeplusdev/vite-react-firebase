// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UsDh5zxSHsU58C4VfjaZSFT__4WBLY0",
  authDomain: "chatapp-s50.firebaseapp.com",
  projectId: "chatapp-s50",
  storageBucket: "chatapp-s50.appspot.com",
  messagingSenderId: "32399577932",
  appId: "1:32399577932:web:016b9f478020817bc0b5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);