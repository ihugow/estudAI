import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// IMPORTANTE: importe o BrowserRouter e AuthProvider
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.jsx";

import EstudAILogo from "./assets/images/global/logo.png";

function AuthLoader() {
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false);
      setInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  if (!initialized || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#191919]">
        <img
          src={EstudAILogo}
          alt="Logo do App"
          className="w-24 h-24 animate-pulse"
        />
      </div>
    );
  }

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AuthLoader />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

export default AuthLoader;