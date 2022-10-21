/*
This file contains
the code related to
the render the heading
it's a reusable component
*/

export default function HeadingElement(props){

    return(
        <h2 style={props.style_header}>
            {props.header_text}
        </h2>
    )
}