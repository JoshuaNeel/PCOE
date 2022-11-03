/*
this file contains
the code related to the
read only input
component can be reused in
other components
*/

const ReadOnlyInput = (props) =>{
    return(
        <>
         <label>{props.labelValue}</label>
        <input type='text' value={props.displayValue}
         readOnly className="col-12 readonlyInput"/>
        </>
    );
};

const ReadOnlyInputComponent = ReadOnlyInput;
export default ReadOnlyInputComponent;
