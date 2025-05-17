import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable background scroll when menu is open
  if (typeof document !== "undefined") {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent z-50">
      {/* Navbar Title */}
      <h1 className="text-3xl sm:text-3xl md:text-4xl tracking-wide honk-text drop-shadow-md select-none font-bold ml-2">
        CodeBrawl
      </h1>

      {/* Hamburger Button */}
      <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)} color="#fffB00" />

      {/* Sidebar Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-full lg:w-3/12 xl:w-2/12 bg-transparent backdrop-blur-md text-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Hamburger */}
        <div className="p-6 md:p-4 flex justify-end">
          <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)} color="#fffB00" />
        </div>

        {/* Menu Items */}
        <ul className="h-full space-y-6 px-4 md:px-6 lg:px-8 text-base md:text-xl lg:text-2xl font-bold">
          <li>📄 About</li>
          <li>📧 Contact</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>
    </nav>
  );
}
