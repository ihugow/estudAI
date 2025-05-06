import React from "react";
import { Link } from "react-router-dom";

const EstudAI = ({ className = "" }) => {
  return (
    <Link to="/">
      <div className={`flex items-center gap-2.5 w-fit ${className}`} href="#">
        {/* <img
          className="w-13"
          src={logo}
          alt="A imagem apresenta um logotipo em estilo minimalista com tons em degradê de azul e ciano. No centro, vemos o perfil de uma cabeça humana voltada para a direita, com um cérebro em destaque, representando o conhecimento. De dentro da cabeça parte uma seta, direcionada para fora, simbolizando o ato de compartilhar. Ao fundo, parcialmente envolvido pela seta e pelo contorno da cabeça, está o globo terrestre, representando a comunidade global. O design transmite a ideia de que o conhecimento individual pode — e deve — ser compartilhado com o mundo, promovendo conexão, evolução coletiva e impacto positivo. A estética suave, moderna e translúcida reforça uma identidade visual voltada à inovação, colaboração e transformação por meio do saber."
        /> */}
        <span className="text-white text-3xl font-extrabold">
          Estud<span className="main-gradient">AI</span>
        </span>
      </div>
    </Link>
  );
};

const EstudAINav = ({ className = "" }) => {
  return (
    <Link to="/">
      <div className={`flex items-center gap-2.5 w-fit ${className}`} href="#">
        {/* <img
          className="w-13"
          src={logo}
          alt="A imagem apresenta um logotipo em estilo minimalista com tons em degradê de azul e ciano. No centro, vemos o perfil de uma cabeça humana voltada para a direita, com um cérebro em destaque, representando o conhecimento. De dentro da cabeça parte uma seta, direcionada para fora, simbolizando o ato de compartilhar. Ao fundo, parcialmente envolvido pela seta e pelo contorno da cabeça, está o globo terrestre, representando a comunidade global. O design transmite a ideia de que o conhecimento individual pode — e deve — ser compartilhado com o mundo, promovendo conexão, evolução coletiva e impacto positivo. A estética suave, moderna e translúcida reforça uma identidade visual voltada à inovação, colaboração e transformação por meio do saber."
        /> */}
        <span className="text-white text-3xl font-extrabold ">
          Estud<span className="main-gradient">AI</span>
        </span>
      </div>
    </Link>
  );
};

export { EstudAI, EstudAINav };
