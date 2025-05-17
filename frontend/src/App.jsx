import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./Home/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/HomePage" replace /> : <Login />} />
        <Route
          path="/HomePage"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
