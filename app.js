
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDxOOaqPeTwP6zs_UUHQH3L4JwQ4VVQUmI",
    authDomain: "my-first-project-1eba3.firebaseapp.com",
    projectId: "my-first-project-1eba3",
    storageBucket: "my-first-project-1eba3.appspot.com",
    messagingSenderId: "429284828289",
    appId: "1:429284828289:web:c218240e8a8af1684ad980",
    measurementId: "G-6J4CLRZCRV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
