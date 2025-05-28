import "../../../App.css";
import studentImage from "../../../assets/images/global/student.png";

const HomePage = () => {
  return (
    <div className="py-28 bg-[url('./assets/images/global/background.png')] bg-cover">
      <div className="xxl:container mx-auto px-4">
        {/* PROLOGO */}
        <section className="grid grid-cols-1 gap-3 items-center text-center lg:grid-cols-2 xxl:gap-6 lg:text-left">
          <div className="flex w-full justify-center flex-col gap-2 md:gap-7 lg:col-span-1 ">
            <h1 className="text-4xl sm:text-5xl text-balance md:text-6xl xxl:text-7xl font-bold text-white">
              <span className="main-gradient">Estude</span> com <br /> quem vive{" "}
              a mesma <span className="main-gradient">jornada</span> que você
            </h1>
            <p className="text-manatee text-lg md:text-2xl md:w-[85%] mx-auto lg:mx-0">
              Plataforma colaborativa de estudos com o poder da comunidade e da
              IA.
            </p>
            <div className="mt-3 grid grid-cols-2 justify-center gap-5 xl:justify-start xl:max-w-lg xxl:max-w-lg">
              <button className="bg-[#030712] py-3 px-8 rounded-xl font-semibold text-white cursor-pointer border border-gray-500">
                Começar
              </button>
              <button className="bg-white py-3 px-8 rounded-xl font-semibold  cursor-pointer">
                Explorar
              </button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 animate-floating xl:col-span-1">
            <img
              src={studentImage}
              alt="Imagem de uma estudante apontando para o título da página."
              className="w-full"
            />
          </div>
        </section>

        {/* FEED */}
        <section className="mt-20 xl:mt-44 flex flex-col xl:flex-row-reverse items-center xl:justify-between xl:gap-24">
          
        </section>
      </div>
    </div>
  );
};

export default HomePage;
