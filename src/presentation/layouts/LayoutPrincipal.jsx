import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const LayoutPrincipal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <SideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default LayoutPrincipal;
