import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import EmailVerification from "./EmailVerification";

const RegisterForm = () => {
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const [showVerification, setShowVerification] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      const displayName = `${name} ${secondname}`;
      const photoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}+${encodeURIComponent(secondname)}&background=random`;

      await updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        username: username.toLowerCase(),
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        createdAt: new Date()
      });

      await sendEmailVerification(userCredential.user);

      setShowVerification(true);

    } catch (error) {
      console.error("Erro de autenticação:", error);
      setErro(formatFirebaseError(error.code));
    }
  };

  const formatFirebaseError = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "Esse e-mail já está em uso.";
      case "auth/invalid-email":
        return "E-mail inválido.";
      case "auth/weak-password":
        return "A senha deve ter pelo menos 6 caracteres.";
      default:
        return "Erro desconhecido. Tente novamente.";
    }
  };

  if (showVerification) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <EmailVerification/>
      </div>
    );
  } else {
    return (
      <section id="Register_Section" className="">
        <h1 className="mt-9 text-white text-base text-center">
          Cadastrar-se e começar a estudar
        </h1>
  
        {erro && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {erro}
          </div>
        )}
  
        <form onSubmit={handleAuth}>
          <div id="Username" className="mt-4">
            <label className="block text-white text-sm mb-2" htmlFor="username">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              placeholder="@username"
              className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div id="Name&Secondname" className="flex flex-row gap-4">
            <div id="Name" className="mt-4">
              <label className="block text-white text-sm mb-2" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Nome"
                className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div id="Secondname" className="mt-4">
              <label className="block text-white text-sm mb-2" htmlFor="secondname">
                Sobrenome
              </label>
              <input
                id="secondname"
                type="text"
                placeholder="Sobrenome"
                className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
                value={secondname}
                onChange={(e) => setSecondname(e.target.value)}
                required
              />
            </div>
          </div>
          <div id="Email" className="mt-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="usuario@email.com"
              className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div id="Password" className="mt-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">
                Senha
              </label>
            <input
              id="password"
              type="password"
              placeholder="******"
              className="w-full text-white py-2.5 px-4 bg-[#10151f] border-1 border-[#292d41] rounded-md hover:border-secondary-blue duration-300 focus:outline-none focus:ring-1 focus:ring-secondary-blue"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
  
          <button
            type="submit"
            className="mt-8 mb-5 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
      </section>
    );
  } 
};

export default RegisterForm;
