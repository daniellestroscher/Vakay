import { init } from 'next-firebase-auth';

const initAuth = () => {
  init({
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    //firebaseAuthEmulatorHost: process.env.FIREBASE_AUTH_EMULATOR_HOST,
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'tripster-85894',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        //privateKey: privateKey.replace(/\\n/g, '\n'),
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n')
          : undefined,
      },
      databaseURL: process.env.MONGODB_URI,
    },
    // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
    useFirebaseAdminDefaultCredential: false,
    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_API_KEY, // required
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      databaseURL: process.env.MONGODB_URI,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    },
    cookies: {
      name: 'authCookie', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
