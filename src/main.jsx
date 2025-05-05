import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.jsx";

import LoadingAnimation from "./presentation/components/LoadingAnimation.jsx";

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
    return <LoadingAnimation fullScreen />;
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
