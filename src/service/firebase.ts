import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//local
import { PUBLIC_API } from "../api/api";
import { setLocalStorage } from "../utils/helpers/localStorage";
import { KEY_TOKEN } from "../utils/constans/key";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const getIdToken = async (navigate: any) => {
  try {
    const userCredential = await auth.signInWithPopup(provider);
    const idToken = await userCredential.user?.getIdToken();
    const { data } = await PUBLIC_API.post(
      `user/authenticate/google?tokenId=${idToken}`
    );
    data?.token && setLocalStorage(KEY_TOKEN, data?.token);
    data?.role === "USER"
      ? navigate("/")
      : data?.role === "SUPER_ADMIN" && navigate("/admin");
  } catch (error: any) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log("Popup closed by the user");
      // Handle the case where the user closes the popup
    } else {
      console.log(error, "error");
      throw error;
    }
  }
};

export default firebase;
