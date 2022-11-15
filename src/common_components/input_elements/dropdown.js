/*
This file contains
the code related to
the dropdown component
*/

const Dropdown = (props) => {
  return (
    <div>
      <label>LOB</label>
      <select className="col-12">
        <option value="0">Select LOB</option>
        {props.value.map((item, index) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

const DropDownComponent = Dropdown;
export default DropDownComponent;
