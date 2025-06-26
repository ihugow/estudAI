import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";

import { ReactComponent as GoogleIcon } from "../../assets/images/global/icons/socials/google.svg";
import { ReactComponent as MicrosoftIcon } from "../../assets/images/global/icons/socials/microsoft.svg";

const LoginForm = ({ onShowRegister }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const generateUniqueUsername = async (displayName) => {
    // Remove espaços, converte para minúsculas. Ex: "Hugo Oliveira" -> "hugooliveira"
    let baseUsername = displayName.replace(/\s+/g, "").toLowerCase();
    let username = baseUsername;
    let counter = 1;

    while (true) {
      // Cria uma consulta para procurar por documentos com este username
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return username;
      }
      // Se já existe, anexa um número e tenta novamente no próximo loop
      username = `${baseUsername}${counter}`;
      counter++;
    }
  };

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        console.log("Novo usuário com Google, gerando username único...");
        
        // **A MUDANÇA ESTÁ AQUI**
        // Chama a função para gerar um username único
        const uniqueUsername = await generateUniqueUsername(user.displayName);
        
        console.log(`Username gerado: ${uniqueUsername}`);

        await setDoc(userDocRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          username: uniqueUsername, // Salva o username gerado
          createdAt: new Date(),
        });
      }

      navigate("/")
    } catch (error) {
      console.error("Erro ao logar com Google:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário logado com e-mail/senha:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login com e-mail/senha:", error.message);
      alert("Erro ao fazer login: " + error.message);
    }
  };
  return (
    <section id="Login_Section" className="">
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
      <button
        onClick={onShowRegister}
        className="flex gap-2 mt-4 w-full py-2.5 px-4 text-white cursor-pointer bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300"
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
        Continue com Email
      </button>

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

        <div className="">
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
          className="mt-8 mb-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Entrar
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
