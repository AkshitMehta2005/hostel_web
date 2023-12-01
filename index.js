`<script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl-u_BsOOrZOa4HSNLpBYq1GSkP_w5W_I",
  authDomain: "hostel-website-3340f.firebaseapp.com",
  projectId: "hostel-website-3340f",
  storageBucket: "hostel-website-3340f.appspot.com",
  messagingSenderId: "923274570652",
  appId: "1:923274570652:web:69e3d31a8436dfc29ff659",
  measurementId: "G-9R1ZLHEWT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</script>`