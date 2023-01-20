import admin from 'firebase-admin';
import * as firebase from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

let app: firebase.App;
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp({
    credential: admin.credential //.applicationDefault(),
      .cert({
        projectId: 'tripster-85894',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? (process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n') as string)
          : undefined,
      }),
    databaseURL: process.env.MONGODB_URI,
  });
} else {
  app = firebase.getApp();
}

const auth = getAuth(app);
export default auth;
