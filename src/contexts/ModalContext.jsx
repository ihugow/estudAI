import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const ModalContext = createContext();

// 2. Cria o Provedor (Provider)
// Este componente irá conter a lógica e fornecer os dados para seus "filhos"
export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // O objeto 'value' é o que será compartilhado com os componentes
  const value = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

// 3. Cria um Hook customizado para facilitar o uso do contexto
export function useModal() {
  return useContext(ModalContext);
}