/*
this file contains
the code related to the
read only input
component can be reused in
other components
*/

const ReadOnlyInput = (props) =>{
    return(
        <div className='col-6'>
         <label>{props.labelValue}</label>
        <input type='text' value={props.displayValue}
        disabled="true"
         readOnly className="readonlyInput col-12"/>
        </div>
    );
};

const ReadOnlyInputComponent = ReadOnlyInput;
export default ReadOnlyInputComponent;
