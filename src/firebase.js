import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const {REACT_APP_API_KEY}=process.env;
const firebaseConfig = {
  
  apiKey: REACT_APP_API_KEY,
  authDomain: "phone-auth-cbd7f.firebaseapp.com",
  projectId: "phone-auth-cbd7f",
  storageBucket: "phone-auth-cbd7f.appspot.com",
  messagingSenderId: "1054159166239",
  appId: "1:1054159166239:web:559e9c1e323b6a72da2e2a"
};
 

  firebase.initializeApp(firebaseConfig);
  export default firebase;

