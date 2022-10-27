/* The file contains the code
   related to the security
   group grid data
*/
import CopyIcon from '../../../assets/images/table_cell_icons/Copy_Icon.png';
import DeleteIcon from '../../../assets/images/table_cell_icons/Delete_Icon_2.png';
import EditIcon from '../../../assets/images/table_cell_icons/Edit_Icon.png';

import ActionCell from "./actionCell";
import GridCell from './gridCell';

export default function GridData(props){

    const renderActionCell = ()=>{
        return(
            <td>
                <ActionCell imagePath={CopyIcon} />
                <ActionCell imagePath={EditIcon} />
                <ActionCell imagePath={DeleteIcon} />
            </td>
        )
    }
    const buildRow=(row, headers) =>{
        return (
             <tr key={row.id}>
             { headers.map((value, index) => {
                return <GridCell  row={row[value]} headerName={value}
                rowDetails={row} />
              })}
            {props.actionButtons && renderActionCell()}
             </tr>
         )
      };
    return(
    <tbody>
        { props.gridData && props.gridData.map((value) => {
              return buildRow(value, props.dataFieldKeys);
          })}

    </tbody>
    );
}
