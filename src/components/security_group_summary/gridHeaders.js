/* This file contains the code
   related to the Security Group
   Headers
*/

export default function GridHeaders(props){

    // Code to render the grid headers
        return(
            <thead className='thead-light'>
                <tr>
                  {props.gridHeaders.map((headerName,index) => {
                  return(<th key={index} scope="col">{headerName}</th>)
                  })}
                </tr>
            </thead>
        );
}
