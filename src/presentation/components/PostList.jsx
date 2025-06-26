import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useModal } from "../../contexts/ModalContext";
import { db, storage } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

import PostCard from "./PostCard";
import PostExpanded from "./PostExpanded";
import PostCardProfile from "./PostCardProfile";

/**
 * DOCUMENTAÇÃO: PostList
 * Componente reutilizável que recebe uma lista de posts e gerencia toda a lógica
 * de exibição, o modal de detalhes, e as ações de editar e apagar.
 * @param {object} props - As propriedades.
 * @param {Array} props.posts - O array de objetos de post a ser exibido.
 * @param {boolean} props.loading - O estado de carregamento vindo da página pai.
 */

const PostList = ({ posts, loading, variant = "feed" }) => {
  const { user } = useAuth();
  const { openModal } = useModal();

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (post) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailModalOpen(false);
    setSelectedPost(null);
  };

  const handleEditClick = (postToEdit) => {
    handleCloseModal();
    openModal(postToEdit);
  };

  const handleDeletePost = async (postToDelete) => {
    if (
      !window.confirm(
        `Tem certeza que deseja apagar o post "${postToDelete.title}"?`
      )
    ) {
      return;
    }
    try {
      const imageRef = ref(storage, postToDelete.imageUrl);
      await deleteObject(imageRef);
      const postDocRef = doc(db, "posts", postToDelete.id);
      await deleteDoc(postDocRef);

      alert("Post apagado com sucesso!");
      window.location.reload(); // Recarrega a página para ver a lista atualizada.
    } catch (error) {
      console.error("Erro ao apagar o post: ", error);
      alert("Ocorreu um erro ao apagar o post.");
    }
  };

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-10">Carregando posts...</p>
    );
  }

  const renderPosts = () => {
    if (posts.length === 0) {
      return (
        <div className="text-center py-16 px-4 bg-box rounded-lg mt-8 col-span-full">
          <h2 className="text-2xl font-semibold text-white">
            Nenhum post encontrado
          </h2>
          <p className="text-manatee mt-2">
            Não há nada para ver aqui por enquanto.
          </p>
        </div>
      );
    }

    if (variant === "profilePostCard") {
      return posts.map((post) => (
        <PostCardProfile
          key={post.id}
          post={post}
          onCardClick={handleCardClick}
        />
      ));
    }

    return posts.map((post) => (
      <PostCard key={post.id} post={post} onCardClick={handleCardClick} />
    ));
  };
  const gridContainerClass =
    variant === "profilePostCard"
      ? "grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 sm:gap-7"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6";
  return (
    <>
      <div className={gridContainerClass}>
        {renderPosts()}
      </div>

      <PostExpanded
        isOpen={isDetailModalOpen}
        onClose={handleCloseModal}
        post={selectedPost}
        currentUser={user}
        onDelete={handleDeletePost}
        onEdit={handleEditClick}
      />
    </>
  );
};

export default PostList;
