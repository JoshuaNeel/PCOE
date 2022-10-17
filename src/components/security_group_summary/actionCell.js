/*
This file contains the
code related to the
action buttons in the
grid cell
*/

import ImageRender from "../../common_components/imageRender";

export default function ActionCell(props){

    return(
            <td>
                <ImageRender sourcePath={props.imagePath} />
            </td>
    )
}