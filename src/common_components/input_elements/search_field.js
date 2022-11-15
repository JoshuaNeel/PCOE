/*
The file contains
the code related to the
search field
*/
import {SecurityGroupGridData} from '../../utils/table_utils';
import { useDispatch } from 'react-redux';
import {security_group_grid_data} from '../../actions/security_group_actions/security_actions';
import {gridHeaders,subHeaders} from '../../utils/createGroup_utils';
export default function SearchFieldComponent(props){
    const tableData = SecurityGroupGridData.data;
    const dispatch = useDispatch();
    const searchInputValue = (event) =>{
        const text = event.target.value;
        if(text.length >0){
        const filteredData= tableData.filter((i)=>i.groupname.toLowerCase().includes(text));
        dispatch(security_group_grid_data({data:filteredData}));
        }
        else{
            if(text.length == 0){
                dispatch(security_group_grid_data({data:tableData}));
   
            }
        }
    }

    return(
        <div className="input-group"
        style={props?.searchfiledstyle}>
        <input className="form-control py-2 mr-1 pr-5 custom-search-bar"
         type="search" placeholder="Search by group name" id="example-search-input"
         onChange={searchInputValue} />
        <span className="input-group-append search-icon-wrapper">
            <button className="btn border-0 ml-n5" type="button">
                <i className="fa fa-search"></i>
            </button>
        </span>
    </div>

    )
}