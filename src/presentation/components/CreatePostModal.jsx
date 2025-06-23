import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { storage, db, auth } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { FaPlus } from "react-icons/fa6";

const availableTags = [
  "Matemática",
  "Português",
  "Fisica",
  "Quimica",
  "Geografia",
  "Hitória",
  "Filosofia",
  "Sociologia",
  "Artes",
  "Inglês",
  "Educação Fisica",
  "Biologia",
  "Programação",
];

function CreatePostModal({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postTags, setPostTags] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const clearForm = useCallback(() => {
    setTitle("");
    setBody("");
    setPostTags([]);
    setImageFile(null);
    setUploadProgress(0);
    setError("");

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  }, [previewUrl]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        clearForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, clearForm]);

  if (!isOpen) return null;

  const handleTagClick = (tag) => {
    if (postTags.includes(tag)) {
      setPostTags(postTags.filter((t) => t !== tag));
    } else {
      setPostTags([...postTags, tag]);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError("");
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Você precisa estar logado para criar um post.");
      return;
    }

    if (!imageFile) {
      setError("Por favor, selecione uma imagem para o post.");
      return;
    }

    const storageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        setError(
          "Ocorreu um erro ao fazer o upload da imagem: " + error.message
        );
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const postData = {
            title,
            body,
            tags: postTags,
            imageUrl: downloadURL,
            authorId: user.uid,
            authorName: user.displayName || "Anônimo",
            createdAt: serverTimestamp(),
          };

          try {
            const docRef = await addDoc(collection(db, "posts"), postData);
            console.log("Post salvo com o ID: ", docRef.id);

            alert("Post criado com sucesso!");
            setTitle("");
            setBody("");
            setPostTags([]);
            setImageFile(null);
            setUploadProgress(0);
            setImageUrl("");
            clearForm();
            onClose();
          } catch (e) {
            setError("Erro ao salvar o post no banco de dados: " + e.message);
            console.error("Erro ao adicionar documento: ", e);
          }
        });
      }
    );
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-linear-to-r from-bg-login-primary to-bg-login-secondary rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-cinza-ardosia"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-white text-4xl cursor-pointer"
        >
          &times;
        </button>
        <h2 className="text-2xl text-center font-bold text-white">Novo Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white font-semibold mb-2"
            >
              Título
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 text-white border bg-box border-cinza-ardosia rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Imagem do Post
            </label>
            <input
              type="file"
              id="imageUpload"
              onChange={handleImageChange}
              accept="image/png, image/jpeg, image/gif"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 hidden"
            />
            <label
              htmlFor="imageUpload"
              className="flex justify-center p-2 bg-cinza-ardosia text-white font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <FaPlus className="size-6" />
            </label>
            {previewUrl && (
              <div className="mt-6 mx-auto">
                <img
                  src={previewUrl}
                  alt="Preview do post"
                  className="rounded-lg w-auto shadow-md"
                />
              </div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="body"
              className="block text-white font-semibold mb-2"
            >
              Conteúdo
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="8"
              className="w-full text-white px-4 py-2 bg-box border border-cinza-ardosia rounded-lg focus:outline-none"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                    postTags.includes(tag)
                      ? "bg-secondary-blue text-white"
                      : "bg-cinza-ardosia text-white hover:bg-secondary-blue"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {/* <p className="text-sm text-gray-500 mt-2">
              Tags selecionadas: {postTags.join(", ")}
            </p> */}
          </div>
          {uploadProgress > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-700">
                Progresso do Upload: {Math.round(uploadProgress)}%
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
          {imageUrl && (
            <div className="mb-4">
              <p className="text-green-600 font-semibold">Upload concluído!</p>
              <img
                src={imageUrl}
                alt="Pré-visualização do post"
                className="mt-2 rounded-lg max-h-60 w-auto shadow-md"
              />
            </div>
          )}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-secondary-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 cursor-pointer"
            disabled={uploadProgress > 0 && uploadProgress < 100}
          >
            {uploadProgress > 0 && uploadProgress < 100
              ? "Enviando imagem..."
              : "Criar Post"}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root") // Onde o portal deve renderizar o conteúdo
  );
}

export default CreatePostModal;
