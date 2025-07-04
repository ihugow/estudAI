import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import LoadingAnimation from "./LoadingAnimation";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingAnimation fullScreen/>;
  }

  if (user && user.emailVerified) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoute;
