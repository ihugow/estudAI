import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import PostList from "../../components/PostList";

//Ícones
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaBookmark } from "react-icons/fa";

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
    <div id="BODY" className="flex justify-center relative bg-bgpage min-h-screen">
      <div className="mt-15 w-full h-50 z-0 absolute bg-[url('./assets/images/pages/profile/bannerprofile.jpg')] bg-center bg-cover">
      </div>
      <div id="CONTAINER" className="pt-50 px-4 lg:px-8 flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col z-1">
          <div id="IMG&NAME" className="">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="Sua foto de perfil"
              className="size-30 rounded-full border-4 border-bgpage mx-auto mb-4 sm:mb-0 object-cover"
            />
            <h2 className="text-center text-2xl text-white font-semibold mt-4">
              {user.displayName || "Nome não informado"}
            </h2>
            <p className="text-center text-gray-400">
              @{user.username}
            </p>
          </div>
          <div id="INFO" className="mt-7 sm:flex-col sm:mt-0 border">
            <div
              id="USER-INFO"
              className="flex justify-between sm:gap-8 sm:mt-3.5"
            >
              <div className="flex flex-col items-center md:flex-row sm:gap-2">
                <span className="font-bold text-white">{userPosts.length}</span>
                <p className="text-gray-400">publicaçoes</p>
              </div>
              <div className="flex flex-col items-center md:flex-row sm:gap-2">
                <span className="font-bold text-white">0</span>
                <p className="text-gray-400">seguidores</p>
              </div>
              <div className="flex flex-col items-center md:flex-row sm:gap-2">
                <span className="font-bold text-white">0</span>
                <p className="text-gray-400">seguindo</p>
              </div>
            </div>
          </div>
        </div>
        <div id="CATEGORY" className="flex flex-col w-full md:pt-20">
          <div className="flex">
            <div className="flex-1 flex justify-center items-center gap-4 border-b-2 border-white py-2">
              <p className="text-white font-bold">Posts</p>
              <TfiLayoutGrid3Alt className="text-white size-5" />
            </div>
            <div className="flex-1 flex justify-center items-center gap-4 border-b-2 border-manatee py-2">
              <p className="text-manatee font-bold">Salvos</p>
              <FaBookmark className="text-manatee size-5" />
            </div>
          </div>
          <PostList posts={userPosts} loading={loading} variant="profilePostCard" />
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
