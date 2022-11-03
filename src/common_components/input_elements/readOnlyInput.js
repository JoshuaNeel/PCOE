/*
this file contains
the code related to the
read only input
component can be reused in
other components
*/

const ReadOnlyInput = (props) =>{
    return(
        <input type='text' value='test value' readOnly className="col-12 readonlyInput"/>
    );
};

const ReadOnlyInputComponent = ReadOnlyInput;
export default ReadOnlyInputComponent;
