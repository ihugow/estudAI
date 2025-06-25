import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import PostList from "../../components/PostList";

//Ícones
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaBookmark } from "react-icons/fa";
import { IoEyeOffOutline } from "react-icons/io5";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchUserPosts = async () => {
        setLoading(true);
        try {
          const q = query(
            collection(db, "posts"),
            where("authorId", "==", user.uid),
            orderBy("createdAt", "desc")
          );

          const querySnapshot = await getDocs(q);
          const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setUserPosts(posts);
        } catch (error) {
          console.error("Erro ao buscar os posts do usuário: ", error);
        } finally {
          setLoading(false);
        }
      };
      fetchUserPosts();
    } else {
      setLoading(false);
    }
  }, [user]);

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
            <span className="font-bold text-white">{userPosts.length}</span>
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

        <div id="CATEGORY" className="flex justify-between mt-7">
          <div className="flex-1 border-t-2 border-white py-2">
            <TfiLayoutGrid3Alt className="text-white size-6 mx-auto" />
          </div>
          <div className="flex-1 border-t-2 border-zinc-500 py-2">
            <FaBookmark className="text-white size-6 mx-auto" />
          </div>
        </div>
        <PostList posts={userPosts} loading={loading} />
      </div>
    </div>
  );
};

export default Profile;
