import React from "react";

import styles from "./HomePage.module.css";
import "../../App.css";
import studentImage from "../../assets/images/global/mindStudent.png";
import mindGallery from "../../assets/images/pages/home/mindGallery.png";

import mathIcon from "../../assets/images/global/Icons/materias/math.png";
import portugueseIcon from "../../assets/images/global/Icons/materias/portuguese.png";
import biologyIcon from "../../assets/images/global/Icons/materias/biology.png";
import geographyIcon from "../../assets/images/global/Icons/materias/geography.png";
import historyIcon from "../../assets/images/global/Icons/materias/history.png";
import chemicalIcon from "../../assets/images/global/Icons/materias/chemical.png";

const materias = [
  { nome: "Matemática", slug: "matematica", icon: mathIcon },
  { nome: "Português", slug: "portugues", icon: portugueseIcon },
  { nome: "Biologia", slug: "biologia", icon: biologyIcon },
  { nome: "Geografia", slug: "geografia", icon: geographyIcon },
  { nome: "História", slug: "historia", icon: historyIcon },
  { nome: "Química", slug: "quimica", icon: chemicalIcon },
];

const HomePage = () => {
  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.homeContainer} container mx-auto px-4`}>
        <section className={styles.prologo}>
          <div className={styles.prologoTxt}>
            <h1 className={styles.title}>
              Alavanque o <br />
              seu potencial{" "}
              <span className={styles.spanGrad}>
                <strong>adquirindo</strong>
              </span>{" "}
              ou{" "}
              <span className={styles.spanGrad}>
                <strong>compartilhando</strong>
              </span>{" "}
              conhecimento
            </h1>
            <p className={`${styles.description} glbParagraph`}>
              Conectamos mentes curiosas e apaixonadas por aprender. Seja você
              um expert ou um entusiasta, aqui é o lugar ideal para trocar
              conhecimentos.
            </p>
          </div>
          <div className={styles.prologoImg}>
            <img
              src={studentImage}
              alt="Imagem de uma estudante apontando para o título da página."
            />
          </div>
        </section>

        <section className={styles.beneficios}>
          <div className={styles.blocksCont}>
            {[
              {
                icon: "fa-graduation-cap",
                title: "Conhecimento",
                text: "Aqui você terá acesso gratuito à conhecimento em várias áreas da educação, de forma prática e eficaz.",
              },
              {
                icon: "fa-house-laptop",
                title: "Acesso Remoto",
                text: "Estude do conforto do seu lar, a qualquer momento somente acessando nossa plataforma.",
              },
              {
                icon: "fa-laptop",
                title: "Multi Device",
                text: "Nossa plataforma é totalmente projetada para que você acesse de todos os tipos de dispositivos e telas.",
              },
              {
                icon: "fa-users",
                title: "Comunidade",
                text: "Nossa comunidade promove o desenvolvimento pessoal e profissional através da troca de experiências.",
              },
            ].map(({ icon, title, text }, index) => (
              <div className={styles.block} key={index}>
                <div className={styles.iconAndTexts}>
                  <div className={styles.icon}>
                    <i className={`fa-solid ${icon}`}></i>
                  </div>
                  <div className={styles.texts}>
                    <h3>{title}</h3>
                    <p className="glbParagraph">{text}</p>
                  </div>
                </div>
                <div className={styles.glowBar}></div>
              </div>
            ))}
          </div>
          <img className={styles.img} src={mindGallery} alt="" />
        </section>

        <div className={styles.recentsGlowBar}></div>
        <section className={styles.recentes}>
          <h2>Conteúdos Recentes</h2>
          <div className={styles.cardWrapper}>
            {[...Array(6)].map((_, i) => (
              <input
                type="radio"
                name="btn-radio"
                id={`radio${i + 1}`}
                key={i}
                defaultChecked={i === 0}
              />
            ))}

            <div className={styles.cardSlider}>
              {materias.map((materia, i) => (
                <a
                  className={`${styles.card} ${i === 0 ? styles.first : ""}`}
                  href={`/materias/${materia.slug}`}
                  key={i}
                >
                  <img src={materia.icon} alt={`Ícone de ${materia.nome}`} />

                  <h3>{materia.nome}</h3>
                  <p className="glbParagraph">
                    Explore o que nossa comunidade está compartilhando sobre{" "}
                    {materia.slug}.
                  </p>
                </a>
              ))}
            </div>

            <div className={styles.navigation}>
              {[...Array(6)].map((_, i) => (
                <label
                  htmlFor={`radio${i + 1}`}
                  className={styles.bar}
                  key={i}
                ></label>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="h-8 bg-gradient-to-b from-transparent to-[#000011]"></div>
    </div>
  );
};

export default HomePage;
