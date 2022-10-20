/*
This file contains the
code related to the
security gruop details component
*/

export default function GroupDetailsMain(props){
    return(
        <div className='security_group_grid'>
          {props.rowData.groupname}
        </div>
    )
}