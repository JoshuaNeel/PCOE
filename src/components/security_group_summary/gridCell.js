/*
The file contains the
code related to the
grid cell rendering
*/

import DotComponent from "../../common_components/dot";

const valueWithDotsStyles = {
    display: 'flex',
    flexDirection: 'row'
}
export default function GridCell(props){

    /* Method to return the cell data when the value
       is an multiple values
    */
    const displayContentWithElipsis =(value)=>{
        if(value.length> 2){
            return (<span style={valueWithDotsStyles}>
                {value.slice(0,2).join(', ')}
                <DotComponent/>
                </span>);
        }
        else{
            return value.join(', ');
        }
    }
    const displayCellValue =()=>{
        const cellValue = props.row;
        if(Array.isArray(cellValue)){
            
           return displayContentWithElipsis(cellValue);
        }
        else{
            return cellValue;
        }
    }
    return(
        <td >
            {displayCellValue()}
            </td>
    )
}
