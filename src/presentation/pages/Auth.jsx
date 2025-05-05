import { useSearchParams, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { EstudAI } from "../components/EstudAI";

import { IoReturnDownBackSharp } from "react-icons/io5";
import EmailVerification from "../components/EmailVerification";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = searchParams.get("mode") || "login";

  const handleShowRegister = () => {
    navigate("/auth?mode=register");
  };

  const handleShowLogin = () => {
    navigate("/auth?mode=login");
  };

  const handleBack = () => {
    if (mode === "register") {
      navigate("/auth?mode=login");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div
        id="Body"
        className="p-3 flex w-screen min-h-screen bg-[url('./assets/images/global/background.png')] bg-cover bg-fixed
                   sm:p-7 xxl:p-15"
      >
        <div
          id="Container"
          className="flex-1 justify-center rounded-lg bg-[url('./assets/images/pages/login/testStudentLoginImg.jpg')] bg-cover bg-center bg-no-repeat
                   md:justify-start"
        >
          <div
            id="Auth_Section"
            className="p-3 w-full h-full bg-linear-to-r from-bg-login-primary to-bg-login-secondary rounded-lg
                     md:w-96 md:rounded-l-lg md:rounded-r-none"
          >
            <button
              onClick={handleBack}
              className="p-2 text-white items-center bg-[#10151f] border-1 border-[#292d41] rounded-md cursor-pointer hover:border-secondary-blue duration-300"
            >
              <IoReturnDownBackSharp className="size-5" />
            </button>
            <EstudAI className="mx-auto mt-4" />
            {mode === "verification" ? (
              <EmailVerification />
            ) : mode === "register" ? (
              <RegisterForm onShowLogin={handleShowLogin} />
            ) : (
              <LoginForm onShowRegister={handleShowRegister} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
