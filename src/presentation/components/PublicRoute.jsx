import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;

  if (user && user.emailVerified) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
