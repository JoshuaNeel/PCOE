import React from "react";
import "./Button.scss";

const Button = () => {
  const handleButtonClick = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <button onClick={handleButtonClick}>+ New Group</button>
    </section>
  );
};
export default Button;
