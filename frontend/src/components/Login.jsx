import { useState } from "react";
import sky from "../assets/sky.jpg";
import retro from "../assets/retro.jpeg";
import Buttons from "./Buttons";
import Button82 from "./Button82";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isPopup, setIsPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);

        setLoginMessage(`✅ ${data.message}`);
        setTimeout(() => {
          navigate("/HomePage", { replace: true });
        }, 1500);
      } else {
        setLoginMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div
      className="min-h-screen min-w-screen flex flex-col bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${sky})` }}
    >
      <Navbar />

      {/* Main Section - Responsive position fixes */}
      <div className="m-auto flex items-center justify-center px-6 md:px-12 lg:px-24  ">
        <div className="w-full text-center text-white space-y-6 p-6 md:p-10">
          <h1 className="text-2xl sm:text-3xl  md:text-5xl lg:text-6xl xl:text-5xl font-bold">
            <span className="emoji-text">🚀</span> Welcome to the Playground of Coding{" "}
            <span className="emoji-text">⌨️</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-gray-200">
            Sharpen your skills, battle with fellow coders, and conquer the leaderboard!{" "}
            <span className="emoji-text">🏆💻</span> Let’s see who codes the fastest!{" "}
            <span className="emoji-text">⚡</span>
          </p>

          <div className="mt-4">
            <Buttons text="Start🎯" onClick={() => setIsPopup(true)} />
          </div>
        </div>
      </div>

      {/* POPUP COMPONENT */}
      {isPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50 transition-all duration-300">
          <div
            className="p-6 bg-cover rounded-2xl shadow-xl w-11/12 md:max-w-md lg:max-w-sm xl:max-w-md"
            style={{ backgroundImage: `url(${retro})` }}
          >
            <h2 className="text-[2rem] sm:text-[2.2rem] tracking-wide honk-text text-center select-none font-semibold mb-4 text-white">
              CodeBrawl
            </h2>

            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-3 bg-transparent my-3 tracking-wide border-b-2 text-xl sm:text-2xl border-white text-white honk-text placeholder-gray-300 focus:outline-none focus:border-yellow-300"
            />

            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full my-3 p-3 bg-transparent tracking-wide border-b-2 text-xl sm:text-2xl border-white text-white honk-text placeholder-gray-300 focus:outline-none focus:border-yellow-300 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl"
                style={{ fontFamily: "'Noto Color Emoji', sans-serif" }}
              >
                {showPassword ? "🫣" : "👀"}
              </button>
            </div>

            <div className="flex justify-center gap-6 mt-5">
              <Button82 text="Cancel" color="red" onClick={() => setIsPopup(false)} />
              <Button82 text="Submit" color="green" onClick={handleSubmit} />
            </div>

            {loginMessage && (
              <div className="text-white mt-4 text-center font-semibold">
                {loginMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
