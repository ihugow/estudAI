import { useNavigate } from "react-router-dom";
import { EstudAI } from "./EstudAI";
import { useAuth } from "../../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import DropDown from "./DropDown";
import LoadingAnimation from "./LoadingAnimation";
import { useModal } from "../../contexts/ModalContext";

import { FaPlus } from "react-icons/fa6";
import { IoSearch, IoNotifications } from "react-icons/io5";
import { FaCircle, FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { openModal } = useModal();

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

  const irParaLogin = () => {
    navigate("/auth");
  };

  if (loading) {
    return LoadingAnimation({ fullScreen: true });
  }

  return (
    <nav
      id="body"
      className="fixed top-0 w-full z-49 bg-[#030712] backdrop-blur-xl border-b border-[#292d41]"
    >
      <div
        id="container"
        className="flex items-center justify-between mx-auto px-4 py-2"
      >
        <div id="settings&estudai" className="flex items-center gap-2.5">
          <EstudAI />
        </div>

        <div id="ways" className="">
          <ul className="hidden gap-10 text-white font-semibold text-lg overflow-hidden md:flex">
            <li>Explorar</li>
            <li>Comunidade</li>
            <li>Sobre nós</li>
          </ul>
        </div>

        <div id="right_buttons" className="flex items-center gap-2">
          <button className="flex items-center justify-center p-1 text-white rounded-md bg-[#10151f] cursor-pointer border-[1.5px] border-[#292d41] duration-300 hover:bg-[#292d41]">
            <IoSearch className="size-4.5" />
          </button>

          {user ? (
            <div className="flex items-center gap-2 p-0.5 pl-2.5 bg-[#10151f] border-[1.5px] border-[#292d41] rounded-full">
              <button onClick={openModal}>
                <FaPlus className="size-5 text-white cursor-pointer transition-colors" />
              </button>
              <DropDown
                className="mr-4"
                sideOffset={12}
                openOnHover
                items={[
                  {
                    type: "profile",
                  },
                  { type: "separator" },
                  {
                    label: "Minha Conta",
                    onSelect: () => navigate("/profile"),
                  },
                  {
                    label: "Sair",
                    onSelect: logout,
                  },
                ]}
              >
                <button>
                  <img
                    src={user.photoURL || "https://via.placeholder.com/40"}
                    alt="Perfil"
                    className="w-10 rounded-full cursor-pointer"
                  />
                </button>
              </DropDown>
            </div>
          ) : (
            <button
              className="text-white font-medium text-xs bg-gradient-to-br from-[#00E9EA] to-[#2e55e9] p-3 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
              onClick={irParaLogin}
            >
              Entrar
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
