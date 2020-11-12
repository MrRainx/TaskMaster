import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/firestore'; // for cloud firestore

const firebaseConfig = {
  apiKey: 'AIzaSyBrT0T2axagasD0PF1Uo0KUNQnF5frAgkM',
  authDomain: 'mrshare-6e1db.firebaseapp.com',
  databaseURL: 'https://mrshare-6e1db.firebaseio.com',
  projectId: 'mrshare-6e1db',
  storageBucket: 'mrshare-6e1db.appspot.com',
  messagingSenderId: '607739075869',
  appId: '1:607739075869:web:8230d4ce46efa10abd15f4',
  measurementId: 'G-ZYT712YJJR',
};

if (!firebase.app.length) {
}

export class Firebase {
  db: firebase.firestore.Firestore;

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.db = firebase.app().firestore();


  }
  

  static defaultMapper = (doc) => ({ id: doc.id, ...doc.data() });
}

const appFirebase = new Firebase();
export default appFirebase;
