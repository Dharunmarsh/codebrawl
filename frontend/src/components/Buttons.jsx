import React from "react";

export default function ArcadeButton({ text, onClick, size = "default" }) {
  const baseClasses = ` emoji-text font-extrabold text-red-500 uppercase select-none
    bg-yellow-300 border-2 border-yellow-400 rounded-2xl 
    transition-all duration-300 ease-in-out  
    hover:shadow-[0_2px_0px_#b45309,0_0_3px_#ffcc00] hover:brightness-110 hover:scale-105
    active:translate-y-1 active:shadow-[0_4px_0px_#b45309] active:brightness-90`;

  const sizeClasses =
    size === "small"
      ? "px-2 py-1  text-md"
      : "px-4 py-1 text-2xl"; // default is big for login

  return (
    <button onClick={onClick} className={`${baseClasses} ${sizeClasses}`}>
      {text}
    </button>
  );
}
