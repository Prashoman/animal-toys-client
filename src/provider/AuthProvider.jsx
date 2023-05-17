import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);
const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState("");

  //created user

  const allInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={allInfo}>{Children}</AuthContext.Provider>
  );
};

export default AuthProvider;
