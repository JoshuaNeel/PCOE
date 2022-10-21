import "./Text.scss";
import React, { useState } from "react";
import Button from "./Button";
// import img from"./img.svg";


const Texts = () => {
  const [text, settext] = useState();

  const handleNameChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
  };

  return (
    <section className="search-container search_container_wrapper" action="">
      <input
        className="search-container"
        type="search"
        value={text}
        placeholder="Search By Group Name"
        name="search"
        onChange={handleNameChange}
      />
      <span>
        {/* <img src={img} className="Text-img" alt="img"/> */}
        </span>
      <Button />
    </section>
  );
};
export default Texts;
