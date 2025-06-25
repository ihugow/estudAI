import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import "../../../App.css";
import { FaSearch } from "react-icons/fa";
import ScrollableTagBar from "../../components/ScrollableTagBar";
import PostCard from "../../components/PostCard";
import PostExpanded from "../../components/PostExpanded";


const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      try {
        // --- A GRANDE DIFERENÇA ESTÁ AQUI! ---
        // 1. Não temos o filtro 'where', pois queremos todos os posts.
        // 2. Apenas ordenamos por data para mostrar os mais recentes primeiro.
        // 3. Adicionei um 'limit(20)' para buscar apenas os 20 posts mais recentes.
        //    Isso evita carregar o banco de dados desnecessariamente. Veremos mais sobre isso abaixo.
        const postsCollectionRef = collection(db, 'posts');
        const q = query(
          postsCollectionRef, 
          orderBy("createdAt", "desc"),
          limit(20) 
        );

        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setAllPosts(posts);
      } catch (error) {
        console.error("Erro ao buscar os posts: ", error);
        // Aqui você poderia definir um estado de erro para mostrar uma mensagem na tela
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []); // O array vazio [] garante que isso só rode uma vez, quando o componente montar.

  // Funções para controlar o modal (idênticas às da ProfilePage)
  const handleCardClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
    setSelectedPost(null);
  };

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Carregando feed...</p>;
  }

  return (
    <div className="">
      <section
        id="START"
        className="pt-72 pb-64 px-4 bg-[url('./assets/images/pages/home/bgstarthome.png')] bg-center bg-cover"
      >
        <h1 className="text-5xl font-semibold text-white text-center">
          Estude com quem vive <br /> a mesma jornada que você
        </h1>
        <p className="text-manatee text-2xl text-center mt-4">
          Plataforma colaborativa de estudos com o poder <br /> da comunidade e
          da IA
        </p>
        <div className="flex gap-4 mt-12 max-w-xl mx-auto">
          <div className="bg-cinza-ardosia py-2.5 px-4 flex-1 rounded-xl inset-shadow-[0_0.5px_1px_rgba(158,160,167.100)]">
            <span className="text-manatee">Busque conteúdos ...</span>
          </div>
          <button className="flex items-center justify-center px-6 text-black bg-gradient-to-br from-[#3cd1ff] to-[#0024C3] rounded-xl cursor-pointer hover:text-white transition-colors duration-300">
            <FaSearch className="size-5.5" />
          </button>
        </div>
      </section>
      {/* start end */}
      <section id="TRENDS" className="bg-bgpage px-4">
        <ScrollableTagBar />
        <p className="text-white font-medium my-4">Veja o que estão compartilhando</p>
        {allPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allPosts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              onCardClick={handleCardClick} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Ainda não há posts no feed. Seja o primeiro a criar!</p>
      )}

      <PostExpanded
        isOpen={isDetailModalOpen}
        onClose={handleCloseModal}
        post={selectedPost}
      />
      </section>
    </div>
  );
};

export default HomePage;
