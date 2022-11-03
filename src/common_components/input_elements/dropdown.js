/*
This file contains
the code related to
the dropdown component
*/

const Dropdown = (props) =>{
    return(
    <div>
     <label>LOB</label>
        <select className="col-12" >
  <option value="0">Select LOB</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
</select>
    </div>
        )
}

const DropDownComponent = Dropdown;
export default DropDownComponent;