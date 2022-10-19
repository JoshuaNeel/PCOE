/*
This file contains the code
related to the
image render
*/

export default function ImageRender(props){
    // Pass image path as the props 
    // from the parent component

    return(
     <img src={props.sourcePath} alt='action cell' />
    )
}