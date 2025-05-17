import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Token is missing, don't even let them load the page
    return <Navigate to="/" replace />;
  }

  // Token exists — let the children component decide what to do
  return children;
};

export default ProtectedRoute;
