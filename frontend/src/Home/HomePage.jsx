import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTokenVerify from "./token";
import Nav from "../Home/components/Nav";
import spin from "../assets/fade-stagger-circles.svg";
import Hero from "../Home/components/Hero";
import Card from "../Home/components/CardComponent";

const HomePage = () => {
  const { isAuthenticated, loading } = useTokenVerify();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  // 🚨 Navigate ONLY ONCE when loading is finished
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center bg-white">
        <img src={spin} alt="loading..." className="w-44 h-44" />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-cover bg-center bg-[#2578ff]">
      <Nav />
      <Hero displayName={username || "Guest"} />
      <Card />
    </div>
  );
};

export default HomePage;
