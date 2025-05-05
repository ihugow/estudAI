import EstudAILogo from "../../assets/images/global/logo.png";

const LoadingAnimation = ({ fullScreen = false }) => {
    const containerClass = fullScreen
      ? "flex justify-center items-center h-screen w-screen bg-zinc-900"
      : "flex justify-center items-center";
  
    return (
      <div className={containerClass}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75">
        </div>
      </div>
    );
  };
  
  export default LoadingAnimation;
  