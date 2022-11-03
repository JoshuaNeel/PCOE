/*
The file contains the
code related to the
grid cell rendering
*/

import DotComponent from "../../../common_components/dot";
import {  useDispatch } from "react-redux"
import { toggle_secuirty_component }
 from '../../../actions/security_group_actions/security_actions';


const valueWithDotsStyles = {
    display: 'flex',
    flexDirection: 'row'
}
export default function GridCell(props){
  const dispatch = useDispatch();

    /* Method to return the cell data when the value
       is an multiple values
    */
    const displayContentWithElipsis =(value, rowData)=>{
        if(value.length> 2){
            return (<span style={valueWithDotsStyles}>
                {value.slice(0,2).join(', ')}
                <DotComponent elementData={rowData}/>
                </span>);
        }
        else{
            return value.join(', ');
        }
    }
    const displayCellValue =()=>{
        const cellValue = props.row;
        if(Array.isArray(cellValue)){
            
           return displayContentWithElipsis(cellValue, props.value);
        }
        else{
            return cellValue;
        }
    }

    const onGroupNameClick = ()=>{
        dispatch(toggle_secuirty_component('details_page',props.rowDetails,props.rowDetails.groupname))
    };
    
    return(
            <td
            onClick={props.headerName === 'groupname'? onGroupNameClick: undefined}
            style={props.headerName === 'groupname'?
             {textDecoration:'underline',
             cursor:'pointer',
             position:'relative',
             color:'rgba(26,78,119,1)'}
             : {position:'relative'}}
            >
            {displayCellValue()}
            </td>
    )
}
