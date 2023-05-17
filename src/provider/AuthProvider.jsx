import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  //created user
  const createdUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login email and password
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //loginUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //google with login
  const logInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //logOut
  const loggedOut = () => {
    return signOut(auth);
  };
  const allInfo = {
    user,
    createdUser,
    logInUser,
    logInGoogle,
    loading,
    loggedOut,
  };

  //console.log(allInfo);
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
