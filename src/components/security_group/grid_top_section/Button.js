import React from "react";
import "./Button.scss";
import PlusImg from './plusIcons.png';

const Button = ({label, buttonstyles, ClickEvent}) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
  };
  return (
    <section>
     <button onClick={ClickEvent} style={buttonstyles} className='button_with_icon'>
      <img src={PlusImg} 
      style={{height:'auto',width:'17px',paddingRight:'5px'}} />
      <label>{label} </label> 
      </button>
    </section>
  );
};
export default Button;
