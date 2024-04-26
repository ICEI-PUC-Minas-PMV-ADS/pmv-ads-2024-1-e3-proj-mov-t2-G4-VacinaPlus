import firebase from "firebase/compat/app"; //importando inicialização fire base
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

let firebaseConfig = {
  apiKey: "AIzaSyAVZK5jpVmUyvIE6mwWV-T5ZFr7YXaR-P8",
  authDomain: "vacina-plus.firebaseapp.com",
  projectId: "vacina-plus",
  storageBucket: "vacina-plus.appspot.com",
  messagingSenderId: "315412506397",
  appId: "1:315412506397:web:c13f0bf059a0e8302fa3f4",
  measurementId: "G-S2B3WJGTL1"
};

// Initialize Firebase
if(!firebase.apps.length){ //deixa uma rota
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;