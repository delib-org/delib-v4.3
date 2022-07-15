import config  from './configKey';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

export const firebaseApp = initializeApp(config);
// export const analytics = getAnalytics(firebaseApp);

export const DB = getFirestore();
export const storage = getStorage();