import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import toast from "react-hot-toast";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user
    } catch (e) {
        toast.error(e.code);
    }
}

export const signup = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (e) {
        toast.error(e.code);
    }
}
export const logout = async () => {
    try {
        await signOut(auth);
        toast.success('You logged out successfully');
        return true
    } catch (e) {
        toast.error(e.message);
    }
}

export const passwordUpdate = async (password) => {
    try {
        await updatePassword(auth.currentUser, password)
        toast.success('Password changed successfully');
        return true;
    } catch (e) {
        toast.error(e.message);
    }
}
export default app;