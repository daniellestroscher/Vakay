import admin from 'firebase-admin';
import * as firebase from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

let app: firebase.App;
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n')
        : undefined,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    }), //applicationDefault()
    databaseURL: process.env.MONGODB_URI,
  });
} else {
  app = firebase.getApp();
}

const auth = getAuth(app);
export default auth;
