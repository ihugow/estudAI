import "../../../App.css";
import bgStartHome from "../../../assets/images/pages/home/bgstarthome.png";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="py-28 bg-[url('./assets/images/pages/home/bgstarthome.png')] bg-cover bg-center">
      <div id="start" className="pt-25">
        <h1 className="text-5xl font-semibold text-white text-center">
          Estude com quem vive a <br />
          mesma jornada que você
        </h1>
        <p className="text-manatee text-xl text-center mt-4">
          Plataforma colaborativa de estudos com o poder <br /> da comunidade e
          da IA
        </p>
        <div id='SEARCH' className="bg-cinza-ardosia flex justify-between items-center max-w-lg mx-auto mt-12 p-2 px-4 rounded-full inset-shadow-[0_1px_2px_rgba(125,125,125,125.25)]">
          <span className="text-manatee">Busque conteúdos</span>
          <div className="p-2 text-black bg-gradient-to-br from-[#00E9EA] to-[#2e55e9] rounded-full">
            <FaSearch />
          </div>
        </div>
        <div>

        </div>
      </div> {/* start end */}
    </div>
  );
};

export default HomePage;
