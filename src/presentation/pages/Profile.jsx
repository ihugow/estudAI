import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="Sua foto de perfil"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-center text-2xl font-semibold">{user.displayName || "Nome não informado"}</h2>
        <p className="text-center text-gray-600">{user.email}</p>

        <button
          onClick={() => logout()}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600 transition-colors"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Profile;