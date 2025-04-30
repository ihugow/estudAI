import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Cria o Contexto
const AuthContext = createContext();

// Hook para acessar o contexto mais facilmente
export const useAuth = () => useContext(AuthContext);

// Provider que vai envolver sua aplicação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined = carregando, null = não logado

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

