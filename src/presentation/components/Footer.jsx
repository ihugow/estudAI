import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/images/global/logo.png";

const Footer = () => {
  return (
    <div className={`${style.footerFull}`}>
      <div className={`${style.footer} container py-10 mx-auto px-4 grid lg:grid-cols-2 gap-8`}>
        <div className={`${style.logoAndSocial} flex flex-col gap-4 `}>
          <div className="flex gap-3">
            <img src={logo} alt="" />
            <span className="glbLogoTitle">
              Estud<span className="glbSpanGrad">AI</span>
            </span>
          </div>
          <div className={`${style.social} flex flex-row gap-3`}>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-telegram"></i>
          </div>
        </div>
        <div className={`${style.info} flex flex-wrap gap-5 md:justify-between`}>
          <div className={`${style.descobrir}`}>
            <p className="text-white font-semibold text-base">Descobrir</p>
            <p className="glbParagraph">Sobre a EstudAI</p>
          </div>

          <div className={`${style.license}`}>
            <p className="text-white font-semibold text-base">
              Licença & Termos de Uso
            </p>
            <p className="glbParagraph">Política de Privacídade</p>
            <p className="glbParagraph">Termos de Uso</p>
          </div>

          <div className={`${style.ajuda}`}>
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
