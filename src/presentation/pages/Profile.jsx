import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaBookmark } from "react-icons/fa";
import { RxEyeNone } from "react-icons/rx";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (user === undefined) {
    return <p>Carregando perfil...</p>;
  }

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div
      id="BODY"
      className="pt-[61px] flex justify-center min-h-screen bg-[#0e0f12]
                 md:items-center"
    >
      <div
        id="CONTAINER"
        className="container mt-10 px-4 flex flex-col w-full max-w-md
                   md:mt-0"
      >
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="Sua foto de perfil"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-center text-2xl text-white font-semibold">
          {user.displayName || "Nome não informado"}
        </h2>
        <p className="text-center text-gray-400">{user.email}</p>

        <div id="INFO" className="flex justify-between mt-7">
          <div className="flex flex-col items-center">
            <span className="font-bold text-white">0</span>
            <p className="text-gray-400">publicaçoes</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-white">0</span>
            <p className="text-gray-400">seguidores</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-white">0</span>
            <p className="text-gray-400">seguindo</p>
          </div>
        </div>

        <button
          onClick={() => logout()}
          className="mt-7 bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600 transition-colors"
        >
          Sair
        </button>

        <div id="CATEGORY" className="flex justify-between mt-7">
          <div className="flex-1 border-t-2 border-white py-2">
            <TfiLayoutGrid3Alt className="text-white size-6 mx-auto" />
          </div>
          <div className="flex-1 border-t-2 border-zinc-500 py-2">
            <FaBookmark className="text-white size-6 mx-auto" />
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-center items-center gap-2">
          <RxEyeNone className="text-gray-400 size-10" />
          <p className="text-gray-400">Você ainda não possui publicações</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
