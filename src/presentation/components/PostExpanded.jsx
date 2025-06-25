import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const PostExpanded = ({
  isOpen,
  onClose,
  post,
  currentUser,
  onDelete,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Função de limpeza
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  // Se o modal não estiver aberto ou não houver post selecionado, não renderiza nada.
  if (!isOpen || !post) {
    return null;
  }

  // Formata a data para exibição
  const postDate = post.createdAt?.toDate().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {post.title}
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>Por {post.authorName}</span>
            <span className="mx-2">•</span>
            <span>{postDate}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
            {post.body}
          </p>
        </div>
        <div className="p-4 border-t flex justify-between items-center">
            <div>
              {/* O botão de Apagar (e futuramente Editar) só aparece aqui */}
              {currentUser && currentUser.uid === post?.authorId && (
                <button 
                  onClick={() => onDelete(post)}
                  className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Apagar Post
                </button>
              )}
            </div>
            <button onClick={onClose} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Fechar
            </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default PostExpanded;
