/* The file contains the code
   related to the security
   group grid data
*/
import CopyIcon from '../../assets/images/table_cell_icons/Copy_Icon.png';
import DeleteIcon from '../../assets/images/table_cell_icons/Delete_Icon_2.png';
import EditIcon from '../../assets/images/table_cell_icons/Edit_Icon.png';

import ActionCell from "./actionCell";

export default function GridData(props){

    const renderActionCell = ()=>{
        return(
            <tr>
                <ActionCell imagePath={CopyIcon} />
                <ActionCell imagePath={EditIcon} />
                <ActionCell imagePath={DeleteIcon} />
            </tr>
        )
    }
    return(
    <tbody>
      {props.gridData.map((rowData,index) =>{
       return(<tr key={index}>
         {rowData.map((dataItem,dataIndex)=>{
            return(<td key={`${index}_${dataIndex}`}>
                {dataItem}
            </td>);
         })}
         {renderActionCell()}
       </tr>)
      })}
    </tbody>
    );
}
