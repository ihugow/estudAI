// src/components/ScrollableTagBar.jsx

import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Componente de Tag individual (pode ser o mesmo que você já tem)
const Tag = ({ label, imageUrl, isActive }) => {
  const activeClasses = isActive ? "" : "";

  return (
    <button
      className={`relative flex-shrink-0 w-40 h-12 rounded-lg overflow-hidden focus:outline-none transition-all duration-200 cursor-pointer ${activeClasses}`}
    >
      <img
        src={imageUrl}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-cinza-ardosia/90"></div>
      <span className="relative text-white font-bold text-sm z-10">
        {label}
      </span>
    </button>
  );
};

// O componente principal da barra rolável
const ScrollableTagBar = () => {
  const tagsData = [
    {
      label: "Matemática",
      imageUrl:
        "https://images.unsplash.com/photo-1718306201865-cae4a08311fe?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hdGh8ZW58MHx8MHx8fDA%3D",
      active: true,
    },
    {
      label: "Português",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1666739032615-ecbd14dfb543?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D",
      active: false,
    },
    {
      label: "Inglês",
      imageUrl:
        "https://images.unsplash.com/photo-1454535524385-496c92f1f4b9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXRlZCUyMHN0YXRlc3xlbnwwfHwwfHx8MA%3D%3D",
      active: false,
    },
    {
      label: "Fisica",
      imageUrl:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "Química",
      imageUrl:
        "https://images.unsplash.com/photo-1694230155228-cdde50083573?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "História",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?q=80&w=2444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "Geografia",
      imageUrl:
        "https://images.unsplash.com/photo-1503503330041-4cd943d2b61f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdlb2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
      active: false,
    },
    {
      label: "Biologia",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681399991680-b2be2e767b32?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJpb2xvZ3l8ZW58MHx8MHx8fDA%3D",
      active: false,
    },
    {
      label: "Sociologia",
      imageUrl:
        "https://images.unsplash.com/photo-1642402722493-cc30e9780348?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHNvY2lvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      active: false,
    },
    {
      label: "Filosofia",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682308429561-930e3df7ca6a?q=80&w=2495&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "Artes",
      imageUrl:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "Educação Fisica",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1672046217997-4e40a3d7987d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHNwb3J0fGVufDB8fDB8fHww",
      active: false,
    },
    {
      label: "Programação",
      imageUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "Design",
      imageUrl:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
    {
      label: "Educação Financeira",
      imageUrl:
        "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      active: false,
    },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Função para verificar o estado da rolagem e atualizar os botões/fades
  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const isScrolledLeft = el.scrollLeft > 0;
      const isScrolledRight = el.scrollWidth - el.clientWidth > el.scrollLeft;
      setCanScrollLeft(isScrolledLeft);
      setCanScrollRight(isScrolledRight);
    }
  };

  // Roda a verificação quando o componente monta e quando a janela é redimensionada
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll(); // Verificação inicial
    }

    // Cleanup para remover os listeners e evitar memory leaks
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, []);

  // Função para rolar programaticamente
  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === "left" ? -300 : 300;
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mx-auto p-4">
      {/* 1. Botão de Rolagem para a Esquerda */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-1 shadow-md"
        >
          <FaChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
      )}

      {/* 2. O Contêiner Rolável (Viewport) */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        {/* 3. Contêiner Interno com as Tags (que não quebra a linha) */}
        <div className="flex items-center gap-2.5 flex-nowrap">
          {tagsData.map((tag) => (
            <Tag
              key={tag.label}
              label={tag.label}
              imageUrl={tag.imageUrl}
              isActive={tag.active}
            />
          ))}
        </div>
      </div>

      {/* 4. Botão de Rolagem para a Direita */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-1 shadow-md"
        >
          <FaChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      )}

      {/* --- NOVO BLOCO PARA O FADE DA ESQUERDA --- */}
      {canScrollLeft && (
        <div className="absolute top-4 left-4 bottom-4 w-20 bg-gradient-to-r from-bgpage to-transparent pointer-events-none z-10"></div>
      )}

      {/* 5. Efeito de Fade (gradiente) */}
      {canScrollRight && (
        <div className="absolute top-4 right-4 bottom-4 w-20 bg-gradient-to-l from-bgpage to-transparent pointer-events-none z-10"></div>
      )}
    </div>
  );
};

export default ScrollableTagBar;
