/*
The file contains the
code related to the
grid cell rendering
*/

export default function GridCell(props){

    return(
        <td id={props.data.groupName}>
          {props.data.cellData}
        </td>
    )
}