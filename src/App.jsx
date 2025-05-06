import "./App.css";
import { Routes, Route } from "react-router-dom";

import LayoutPrincipal from "./presentation/layouts/LayoutPrincipal";
import LayoutSimples from "./presentation/layouts/LayoutSimples";
import NoFooterLayout from "./presentation/layouts/NoFooterLayout";
import ScrollToTop from "./presentation/components/ScrollToTop";

import HomePage from "./presentation/pages/home/Home";
import ProfilePage from "./presentation/pages/Profile";
import AuthPage from "./presentation/pages/Auth";
import ProtectedRoute from "./presentation/components/ProtectedRoute";
import PublicRoute from "./presentation/components/PublicRoute";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<NoFooterLayout />}>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
        
        <Route element={<LayoutSimples />}>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
