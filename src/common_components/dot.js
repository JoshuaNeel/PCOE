/*
This file contains the
code realted to the
dot component
*/

import React, {useState, useRef, useCallback, useEffect} from "react";
import { ListGroupModal } from './listGroup';


const borderPropertyForDots = {
    borderBottom:' 4px dotted rgba(2,33,105)',
    width: '16px',
    height: '16px',
    marginLeft: '3px',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    boxShadow:'none',
    position: 'relative'

};
export default function DotComponent({elementData}){

    const [openDialog, setDialogOpen] = useState(false);
    const countries = elementData.countryToInclude;

    const MOUSE_UP = 'mouseup';

    const handleClick = (e) => {
        setDialogOpen(false); 
    };

    function useOutsideClick() {
      const handleDialog = useCallback((event) => {
          if (ref && !ref.current.contains(event.target)) {
            handleClick();
          }
      },[handleClick, ref]);
  
      useEffect(() => {
          document.addEventListener(MOUSE_UP, handleDialog);
  
          return () => { document.removeEventListener(MOUSE_UP, handleDialog); };
      }, [handleDialog]);
      return { handleClick };
    }

    const ref = useRef(null);
    useOutsideClick();


    return(
        <>
            <button id='dots' style={borderPropertyForDots} onClick={() => setDialogOpen(!openDialog)}></button>
            <section style={{ position: 'absolute', zIndex: 2}} ref={ref}>
                {openDialog && <ListGroupModal countries={countries} show={openDialog} close={(e) => handleClick(e)} />}
            </section>
        </>
    )
}
