import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import ScrollableTagBar from "../../components/ScrollableTagBar";
import PostList from "../../components/PostList";
import "../../../App.css";

import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      try {
        // Consulta diferente: busca todos os posts, sem 'where'
        const q = query(
          collection(db, 'posts'), 
          orderBy("createdAt", "desc"),
          limit(20)
        );
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllPosts(posts);
      } catch (error) {
        console.error("Erro ao buscar todos os posts: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="">
      <section
        id="START"
        className="pt-50 md:pt-72 pb-25 md:pb-64 px-4 lg:px-8 bg-[url('./assets/images/pages/home/bgstarthome.png')] bg-center bg-cover"
      >
        <h1 className="text-4xl max-w-2xl mx-auto md:text-5xl font-semibold text-white text-center">
          Estude com quem vive a mesma jornada que você
        </h1>
        <p className="text-manatee text-lg md:text-2xl max-w-lg md:max-w-xl mx-auto text-center mt-4">
          Plataforma colaborativa de estudos com o poder da comunidade e
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
      <section id="TRENDS" className="bg-bgpage px-4 lg:px-8">
        <ScrollableTagBar />
        <p className="text-white font-medium my-4">
          Veja o que estão compartilhando
        </p>
        <PostList posts={allPosts} loading={loading} variant="feed" />
      </section>
    </div>
  );
};

export default HomePage;
