import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuth();

  // Rediriger vers la page de chat si l'utilisateur est authentifié,
  // sinon rediriger vers la page de connexion
  return <Navigate to={isAuthenticated ? "/chat" : "/login"} replace />;
};

export default Index;
