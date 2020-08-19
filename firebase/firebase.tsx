import app from 'firebase/app';
//import 'firebase/firestore'; 
import firebaseConfig from './config';

class Firebase {
  //auth: app.auth.Auth;
  //db: app.firestore.Firestore;

  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    //this.auth = app.auth();
    //this.db = app.firestore();
  }
}

const firebase = new Firebase();

export default firebase;
