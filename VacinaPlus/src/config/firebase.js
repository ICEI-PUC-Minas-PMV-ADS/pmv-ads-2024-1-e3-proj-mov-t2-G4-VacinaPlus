// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //importando inicialização fire base
import {initializeAuth, getReactNativePersistence} from "firebase/auth/react-native"; // importa auth e persistência de dados 
import AsyncStorage from "@react-native-async-storage/async-storage"; // armazenamento assincrono paara pequenas quantidades de dados (semelhante ao localStorage)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// configurações de chaves de acesso
import { 
API_KEY,AUTH_DOMAIN,
PROJECT_ID,STORAGE_BUCKET,
MESSAGING_SENDER_ID,
APP_ID,
MEASUREMENT_ID} from "@env"  //importando informações do .env (variáveis de ambiente)

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
}

/*const firebaseConfig = {
  apiKey: "AIzaSyAVZK5jpVmUyvIE6mwWV-T5ZFr7YXaR-P8",
  authDomain: "vacina-plus.firebaseapp.com",
  projectId: "vacina-plus",
  storageBucket: "vacina-plus.appspot.com",
  messagingSenderId: "315412506397",
  appId: "1:315412506397:web:c13f0bf059a0e8302fa3f4",
  measurementId: "G-S2B3WJGTL1"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
})
export {auth};