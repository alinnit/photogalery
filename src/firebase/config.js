import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Firebase configuration
firebase.initializeApp({
  apiKey: 'AIzaSyDlQQ0pMvz-PsoDN_KD8Ld9SxrHnBE1onI',
  authDomain: 'photo-gal-31052.firebaseapp.com',
  projectId: 'photo-gal-31052',
  storageBucket: 'photo-gal-31052.appspot.com',
  messagingSenderId: '668322076562',
  appId: '1:668322076562:web:9261829e2d56099fae934b',
})

// Initialize Firebase
export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp

export default firebase
