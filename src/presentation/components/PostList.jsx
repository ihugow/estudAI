import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext"
import { useModal } from "../../contexts/ModalContext"
import { db, storage } from "../../firebase"
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

import PostCard from './PostCard';
import PostExpanded from './PostExpanded';

/**
 * DOCUMENTAÇÃO: PostList
 * Componente reutilizável que recebe uma lista de posts e gerencia toda a lógica 
 * de exibição, o modal de detalhes, e as ações de editar e apagar.
 * @param {object} props - As propriedades.
 * @param {Array} props.posts - O array de objetos de post a ser exibido.
 * @param {boolean} props.loading - O estado de carregamento vindo da página pai.
 */

const PostList = ({ posts, loading }) => {
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
    if (!window.confirm(`Tem certeza que deseja apagar o post "${postToDelete.title}"?`)) {
      return;
    }
    try {
      const imageRef = ref(storage, postToDelete.imageUrl);
      await deleteObject(imageRef);
      const postDocRef = doc(db, 'posts', postToDelete.id);
      await deleteDoc(postDocRef);
      
      alert('Post apagado com sucesso!');
      window.location.reload(); // Recarrega a página para ver a lista atualizada.
    } catch (error) {
      console.error("Erro ao apagar o post: ", error);
      alert("Ocorreu um erro ao apagar o post.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Carregando posts...</p>;
  }

  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 mt-4">
          {posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              onCardClick={handleCardClick} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-cinza-ardosia rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-white">Nenhum post encontrado</h2>
          <p className="text-manatee mt-2">Não há nada para ver aqui por enquanto.</p>
        </div>
      )}

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
}

export default PostList
