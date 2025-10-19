import React from "react";
import "../styleComponents/Button.css";

function Button({ children, text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
      <img src={text} alt="" />
    </button>
  );
}

export default Button;
