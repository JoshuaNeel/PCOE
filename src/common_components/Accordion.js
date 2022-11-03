import React, { useState } from "react";
import "./Accordion.scss";


const Accordion=({ title, content })=>{

    const [isActive, setIsActive] = useState(false);
    return(
        <>
        
        <div className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="Active">{isActive ? <b>-</b> :<b>+</b> }</div>
        <div className="accord-style">{title} </div>
        
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
        
        </div>
        </>
    );
}
export default Accordion;