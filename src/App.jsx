import "./App.css";
import { Routes, Route } from "react-router-dom";

import LayoutPrincipal from "./presentation/layouts/LayoutPrincipal";
import LayoutSimples from "./presentation/layouts/LayoutSimples";
import ScrollToTop from "./presentation/components/ScrollToTop";

import HomePage from "./presentation/pages/home/Home";
import LoginPage from "./presentation/pages/login/Login";
import ProfilePage from "./presentation/pages/Profile";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route element={<LayoutSimples />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
