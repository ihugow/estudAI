import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // 3. Se o documento existe, combina os dados do Auth com os dados do Firestore
          const fullUserData = {
            ...currentUser, // Dados do Auth (uid, email, emailVerified, etc.)
            ...userDocSnap.data(), // Dados do Firestore (username, displayName, etc.)
          };
          setUser(fullUserData);
        } else {
          // Caso o documento não exista no Firestore, define o usuário apenas com os dados do Auth
          console.log("Documento do usuário não encontrado no Firestore.");
          setUser(currentUser);
        }
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
