import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import EmailVerification from "./EmailVerification";
import LoadingAnimation from "./LoadingAnimation";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingAnimation fullScreen />;
  }

  if (!user) return <Navigate to="/auth" />;

  if (!user.emailVerified) {
    return (
      <div
        id="BODY"
        className="pt-[61px] flex justify-center items-center h-screen w-screen bg-[#0e0f12]"
      >
        <div
          id="CONTAINER"
          className="max-w-96 mx-4 p-4 pb-8 rounded-lg bg-zinc-900 shadow-lg"
        >
          <EmailVerification />
        </div>
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
