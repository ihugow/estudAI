import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";

import { EstudAI } from "../../components/EstudAI";
import { ReactComponent as GoogleIcon } from "../../../assets/images/global/icons/socials/google.svg";
import { ReactComponent as MicrosoftIcon } from "../../../assets/images/global/icons/socials/microsoft.svg";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // pega o usuário do contexto

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Se já estiver logado, redireciona automaticamente
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // O redirecionamento será feito automaticamente via useEffect acima
    } catch (error) {
      console.error("Erro ao logar com Google:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    // Aqui você pode implementar login com email/senha se quiser (usando signInWithEmailAndPassword)
  };

  return (
    <div
      id="Body"
      className="p-3 flex w-screen min-h-screen bg-[url('./assets/images/global/background.png')] bg-cover bg-fixed
                 sm:p-7 xl:p-15"
    >
      <div
        id="Container"
        className="flex-1 justify-center rounded-lg bg-[url('./assets/images/pages/login/testStudentLoginImg.jpg')] bg-cover bg-center bg-no-repeat
                   md:justify-start"
      >
        <section
          id="Login_Section"
          className="px-3 py-10 w-full h-full bg-linear-to-r from-bg-login-primary to-bg-login-secondary rounded-lg
                     md:w-96 md:rounded-l-lg md:rounded-r-none"
        >
          <EstudAI className="mx-auto" />
          <h1 className="mt-9 text-white text-base text-center">
            Entre ou cadastre-se com
          </h1>

          <button
            onClick={loginGoogle}
            className="flex gap-2 mt-4 w-full py-2.5 px-4 text-white cursor-pointer bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300"
          >
            <GoogleIcon className="w-6 h-6" />
            Google
          </button>

          <div className="mt-2.5 flex flex-col">
            <a
              className="flex gap-2 py-2.5 px-4 text-white items-center bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300"
              href="#"
            >
              <MicrosoftIcon className="w-6 h-6" />
              <span>Microsoft</span>
            </a>
          </div>

          <div className="mt-2.5 flex flex-col">
            <a
              className="flex gap-2 py-2.5 px-4 text-white items-center bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <span>Continue com Email</span>
            </a>
          </div>

          <div className="mt-7 flex items-center">
            <div className="bg-[#282c42] w-full h-[1px]"></div>
            <div className="p-1.5 border border-[#282c42] rounded-full">
              <p className="text-white text-sm">OU</p>
            </div>
            <div className="bg-[#282c42] w-full h-[1px]"></div>
          </div>

          <form id="Login" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
                placeholder="usuario@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm mb-2" htmlFor="senha">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
                placeholder="******"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
