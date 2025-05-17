import "../../../App.css";
import studentImage from "../../../assets/images/global/student.png";
import mindGallery from "../../../assets/images/pages/home/mindGallery.png";

import mathIcon from "../../../assets/images/global/icons/materias/math.png";
import portugueseIcon from "../../../assets/images/global/icons/materias/portuguese.png";
import biologyIcon from "../../../assets/images/global/icons/materias/biology.png";
import geographyIcon from "../../../assets/images/global/icons/materias/geography.png";
import historyIcon from "../../../assets/images/global/icons/materias/history.png";
import chemicalIcon from "../../../assets/images/global/icons/materias/chemical.png";

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
    <div className="py-28 bg-[url('./assets/images/global/background.png')] bg-cover">
      <div className="container mx-auto px-4">
        {/* PROLOGO */}
        <section className="grid grid-cols-1 items-center text-center xl:grid-cols-2 xxl:gap-6 xl:text-left">
          <div className="flex w-full flex-col gap-3 md:gap-7 xl:col-span-1 ">
            <h1 className="w-full text-4xl sm:text-5xl md:text-6xl xxl:text-7xl font-extrabold text-white">
              <span className="main-gradient">Estude</span> com <br /> quem vive{" "}
              a mesma <span className="main-gradient">jornada</span> que você
            </h1>
            <p className="text-manatee lg:text-xl w-[85%] mx-auto xl:mx-0">
              Plataforma colaborativa de estudos com o poder da comunidade e da
              IA, alavanque seu potencial adquirindo ou compartilhando conhecimento.
            </p>
            <div className="mt-3 grid grid-cols-2 justify-center gap-5 xl:justify-start xl:max-w-lg xxl:max-w-xl">
              <button className="bg-[#030712] py-3 px-8 rounded-xl font-semibold text-white cursor-pointer border border-gray-500">
                Começar
              </button>
              <button className="bg-white py-3 px-8 rounded-xl font-semibold  cursor-pointer">
                Explorar
              </button>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 animate-floating xl:col-span-1">
            <img
              src={studentImage}
              alt="Imagem de uma estudante apontando para o título da página."
              className="w-full"
            />
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="mt-20 xl:mt-44 flex flex-col xl:flex-row-reverse items-center xl:justify-between xl:gap-24">
          <img
            src={mindGallery}
            alt=""
            className="w-full max-w-md xl:max-w-[512px] mt-20 xl:mt-0"
          />

          <div className="flex flex-col gap-6 xl:gap-4 w-full">
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
              <div key={index} className="flex items-center">
                <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 p-5 w-full rounded-lg bg-bg-box backdrop-blur-sm">
                  <div className="w-[50px] h-[50px] rounded-full text-white text-[20px] flex items-center justify-center bg-gradient-to-br from-[#00e9ea] to-[#2e55e9]">
                    <i className={`fa-solid ${icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-mwhitetext-lg font-bold">{title}</h3>
                    <p className="glbParagraph text-second-text">{text}</p>
                  </div>
                </div>
                <div className="w-1 h-[60px] bg-light-blue rounded-r-lg shadow-[0_0_15px_-5px_var(--color-light-blue)] ml-2"></div>
              </div>
            ))}
          </div>
        </section>

        {/* RECENTES */}
        <div className="mt-20 xl:mt-44 mx-auto bg-light-blue w-[200px] h-[4px] rounded-t-lg shadow-[0_5px_15px_var(--color-light-blue)]"></div>
        <section className="bg-bg-box backdrop-blur-sm rounded-lg p-4 xl:p-9 mt-0 overflow-hidden xl:overflow-visible">
          <h2 className="text-white text-center font-bold mb-6 xl:mb-9 text-2xl">
            Conteúdos Recentes
          </h2>

          <div className="flex flex-col">
            {[...Array(6)].map((_, i) => (
              <input
                type="radio"
                name="btn-radio"
                id={`radio${i + 1}`}
                key={i}
                defaultChecked={i === 0}
                className="hidden"
              />
            ))}

            <div className="flex xl:grid xl:grid-cols-3 xl:gap-8 transition-all duration-500">
              {materias.map((materia, i) => (
                <a
                  key={i}
                  href={`/materias/${materia.slug}`}
                  className="w-full p-5 bg-card rounded-lg shadow-md hover:scale-[1.05] transition-transform duration-100 xl:h-[240px]"
                >
                  <img
                    src={materia.icon}
                    alt={`Ícone de ${materia.nome}`}
                    className="w-[100px] relative -mt-10 -ml-2"
                  />
                  <h3 className="mt-4 text-white text-lg font-semibold">
                    {materia.nome}
                  </h3>
                  <p className="glbParagraph text-second-text">
                    Explore o que nossa comunidade está compartilhando sobre{" "}
                    {materia.slug}.
                  </p>
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-4 mx-auto xl:hidden">
              {[...Array(6)].map((_, i) => (
                <label
                  key={i}
                  htmlFor={`radio${i + 1}`}
                  className="w-5 h-5 border-2 border-light-blue rounded-full cursor-pointer hover:bg-light-blue transition"
                ></label>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
