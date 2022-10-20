/* This file contains the code
   related to the Security Group
   Headers
*/

export default function GridHeaders(props){

    // Code to render the grid headers
        return(
            <thead className='thead-light'>
                {renderGridHeaders(props.gridHeaders)}
                {renderGridHeaders(props.subHeaders)}
            </thead>
        );

    function renderGridHeaders(data) {
        return <tr>
            {data.map((element, index) => {
                return (<th key={index}
                    scope="col"
                    rowSpan={element.rowSpan}
                    colSpan={element.colSpan}
                    style={element.headerStyle}
                >
                    {element.headerName}
                   
                </th>);
            })}
        </tr>;
    }
}
