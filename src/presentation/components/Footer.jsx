import React from "react";
import { EstudAI } from "./EstudAI";

const Footer = () => {
  return (
    <div className="bg-[#000011]">
      <div className="h-8 bg-gradient-to-b from-transparent to-[#000011]"></div>
      <div className="container py-10 mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 ">
          <EstudAI/>
          <div className="flex flex-row gap-3">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-telegram"></i>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 md:justify-between">
          <div>
            <p className="text-white font-semibold text-base">Descobrir</p>
            <p className="glbParagraph">Sobre a EstudAI</p>
          </div>

          <div>
            <p className="text-white font-semibold text-base">
              Licença & Termos de Uso
            </p>
            <p className="glbParagraph">Política de Privacídade</p>
            <p className="glbParagraph">Termos de Uso</p>
          </div>

          <div>
            <p className="text-white font-semibold text-base">Ajuda</p>
            <p className="glbParagraph">Central de Ajuda</p>
            <p className="glbParagraph">Fale Conosco</p>
          </div>
        </div>
        <div className="h-[0.05rem] w-full bg-white lg:col-span-2"></div>
        <p className="glbParagraph lg:col-span-2 text-center">© 2025 - EstudAI - Todos os direitos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
