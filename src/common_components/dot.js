/*
This file contains the
code realted to the
dot component
*/

const borderPropertyForDots = {
    borderBottom:' 4px dotted #000',
    width: '16px',
    marginBottom: '7px',
    marginLeft: '3px'
};
export default function DotComponent(){

    return(
        <p id='dots' style={borderPropertyForDots}></p>
    )
}