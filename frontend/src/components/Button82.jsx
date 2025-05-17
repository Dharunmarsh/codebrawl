import React from "react";
import "./Button82.css"; // Import the CSS file

const Button82 = ({ text = "Button 82", color = "default", onClick }) => {
  return (
    <button className={`button-82-pushable ${color}`} onClick={onClick} role="button">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">{text}</span>
    </button>
  );
};

export default Button82;
