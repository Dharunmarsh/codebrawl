import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Button from "../../components/Buttons"
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
  if (typeof document !== "undefined") {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }

  
const navigate = useNavigate();
const handleClick = () => {
  localStorage.removeItem("token")
  navigate('/HomePage');
};

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent z-50">
      {/* Left Section: Hamburger + Title */}
      <div className="flex items-center gap-8">
        <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)} color="#fde047" />
        <h1 onClick={handleClick} className="text-3xl md:text-3xl xl:text-4xl tracking-wide font-bold honk-text select-none drop-shadow-md">
          CodeBrawl
        </h1>
      </div>
      {/* Sidebar from Left */}
      <div
        className={`fixed overflow-hidden top-0 left-0 h-screen w-full lg:w-3/12 xl:w-2/12 bg-transparent backdrop-blur-md text-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button inside Sidebar */}
        <div className="p-6 md:p-4 flex justify-end">
          <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)} color="#fffB00" />
        </div>

        {/* Menu Items */}
        <ul className="space-y-6 p-6 md:p-4 cursor-default font-bold text-lg md:text-2xl">
          <li>👤 Account</li>
          <li>📧 Contact</li>
          <li>⚙️ Settings</li>
        </ul>
        <div className="flex justify-center mt-3 items-center ">
          <Button text="Logout" size="small" onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }} />
        </div>
        
      </div>
    </nav>
  );
}
