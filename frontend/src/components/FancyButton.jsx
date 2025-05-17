import React from "react";
import { FaArrowRight, FaMedal } from "react-icons/fa";
import "./FancyButton.css";

const FancyButton = ({
  text = "Click me!",
  onClick,
  showArrow = false,
  variant = "default"
}) => {
  return (
    <button
      className={`comic-button ${variant} select-none`} 
      onClick={onClick}
    >
      {variant === "leaderboard" && (
        <FaMedal className="icon medal-icon always-show" />
      )}
      <span className="button-text">{text}</span>
      {showArrow && <FaArrowRight className="icon arrow-icon" />}
    </button>
  );
};

export default FancyButton;
