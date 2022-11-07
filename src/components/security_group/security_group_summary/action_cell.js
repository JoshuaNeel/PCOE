/*
This file contains the
code related to the
action buttons in the
grid cell
*/

import ImageRender from "../../../common_components/image_render";

export default function ActionCell(props){

    return(
        <ImageRender sourcePath={props.imagePath} />
    )
}