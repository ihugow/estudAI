import React from "react";
import { useNavigate } from "react-router-dom";
import { EstudAI } from "./EstudAI";
import { useAuth } from "../../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import UserDropDown from "./UserDropDown";
import LoadingAnimation from "./LoadingAnimation";
import { LuSettings2 } from "react-icons/lu";
import { IoSearch, IoNotifications } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Header = ({ onMenuClick }) => {
  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("Usuário deslogado com sucesso.");
      navigate("/auth");
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate("/auth");
  };

  if (loading) {
    return LoadingAnimation({ fullScreen: true });
  }

  return (
    <nav
      id="body"
      className="fixed top-0 w-full z-50 bg-[#030712] backdrop-blur-xl border-b border-[#292d41]"
    >
      <div
        id="container"
        className="flex items-center justify-between mx-auto px-4 py-2.5"
      >
        <div id="settings&estudai" className="flex items-center gap-2.5">
          <button
            onClick={onMenuClick}
            className="flex items-center justify-center p-1 text-white rounded-md bg-[#10151f] cursor-pointer border-[1.5px] border-[#292d41] duration-300 hover:bg-[#292d41]"
          >
            <LuSettings2 className="size-4.5" />
          </button>
          <EstudAI />
        </div>

        <div id="right_buttons" className="flex items-center gap-2">
          <button className="flex items-center justify-center p-1 text-white rounded-md bg-[#10151f] cursor-pointer border-[1.5px] border-[#292d41] duration-300 hover:bg-[#292d41]">
            <IoSearch className="size-4.5" />
          </button>

          {user ? (
            <UserDropDown
              user={user}
              onProfile={() => navigate("/profile")}
              onLogout={logout}
            >
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Perfil"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </UserDropDown>
          ) : (
            <button
              className="text-white font-medium text-xs bg-gradient-to-br from-[#00E9EA] to-[#2e55e9] p-2 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
              onClick={irParaLogin}
            >
              Entrar
            </button>
          )}

          <button className="flex items-center justify-center p-1 text-white relative rounded-md bg-[#10151f] cursor-pointer border-[1.5px] border-[#292d41] duration-300 hover:bg-[#292d41]">
            <FaCircle className="text-red-600 size-2.5 absolute top-0.5 right-0.5"/>
            <IoNotifications className="size-4.5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
