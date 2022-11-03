import "./Text.scss";
import React, { useState } from "react";
import {  useDispatch } from "react-redux"

import Button from "./Button";
import { toggle_secuirty_component }
 from '../../../actions/security_group_actions/security_actions';


const defaultStyles= {
  width: '60%',
    height: '40px',
    background:'url("img.svg") no-repeat right ',
    backgroundSize: "16px",
    paddingRight: '15px'
  };
const inputStyles = {
  width: '60%',
  height: '40px',
  };
const buttonstyle = {
    fontSize:'16px',
    marginLeft:"1px",
    backgroundColor: "rgba(2,33,105,1)",
    borderRadius: "4px",
    lineHeight: "0",
    padding: "6px 15px",
    color: "white",
    border: "none",
    outline: "none",
  };
  
const Texts = ({label, buttonstyles, ClickEvent}) => {
  const [text, settext] = useState("");
  const [defaultStyle,setInputStyles] = useState(true);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    e.preventDefault();
    settext(e.target.value);
    if(e.target.value.length > 0){
      setInputStyles(false);
    }
    else{
      setInputStyles(true);
    }
  };
  const search=(data)=>{
     return data.filter((i)=>i.firstname.toLowerCase().includes(text));
   }
const createGroupHandler = (e)=>{
  dispatch(toggle_secuirty_component('create_page','','Create New Group'))

}
  return (
    <section className="search-container search_container_wrapper" action="">
    <input
        
        type="search"
        value={text}
        placeholder="Search By Group Name"
        name="search"
        onChange={handleNameChange}
         style={defaultStyle? inputStyles: defaultStyles}
      />

    <Button buttonstyles={buttonstyle} label={'New Group'}
       ClickEvent={(e)=>createGroupHandler(e)}/>

    </section>
  );
};
export default Texts;
