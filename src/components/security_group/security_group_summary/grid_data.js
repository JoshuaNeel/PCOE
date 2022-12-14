/* The file contains the code
   related to the security
   group grid data
*/
import CopyIcon from '../../../assets/images/table_cell_icons/Copy_Icon.png';
import DeleteIcon from '../../../assets/images/table_cell_icons/Delete_Icon_2.png';
import EditIcon from '../../../assets/images/table_cell_icons/Edit_Icon.png';

import ActionCell from "./action_cell";
import GridCell from './grid_cell';

export default function GridData(props){

    const renderActionCell = ()=>{
        return(
            <td style={{ display: 'flex', justifyContent: 'space-between'}}>
                <ActionCell imagePath={CopyIcon} />
                <ActionCell imagePath={EditIcon} />
                <ActionCell imagePath={DeleteIcon} />
            </td>
        )
    }
    const buildRow=(row, headers) =>{
        return (
             <tr key={row.id}>
                {props.isCheckbox && 
                <td>
                    <input type='checkbox' />
                </td>
                }
             { headers.map((value, index) => {
                return <GridCell  row={row[value]} value={row} headerName={value}
                rowDetails={row}/>
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
