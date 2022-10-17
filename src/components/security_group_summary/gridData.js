/* The file contains the code
   related to the security
   group grid data
*/

export default function GridData(props){
    return(
    <tbody>
      {props.gridData.map((rowData,index) =>{
       return(<tr key={index}>
         {rowData.map((dataItem,dataIndex)=>{
            if(dataIndex !== 8){
            return(<td key={`${index}_${dataIndex}`}>
                {dataItem}
            </td>);
            }
            else{
            return(
                <td key={`${index}_${dataIndex}`}>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            )
            }
         })}
       </tr>)
      })}
    </tbody>
    );
}
