/*
The file contains the
code related to the
grid cell rendering
*/

export default function GridCell(props){

    /* Added sample code to display the cell data with the
       ellipsis
    */ 
    const stringWithElipsis = '...';
    /* Method to return the cell data when the value
       is an multiple values
    */
    const displayContentWithElipsis =(value)=>{
        if(value.length> 2){
            return `${value.slice(0,2).join(', ')} ${stringWithElipsis}`;
        }
        else{
            return value.join(', ');
        }
    }
    return(
        <td key={props.keyValue} >
           {Array.isArray(props.row)? 
           `${displayContentWithElipsis(props.row)}`:
            `${props.row}` } 
            </td>
    )
}
