/*
This file contains the code related
to the text field commonly used
in the components
*/

const TextField = (props) =>{
    return(
        <div>
             <label>Group Name</label>
            <input type='text' className="col-12"
            placeholder={props.placeholder}
            style={props.inputStyle} />
        </div>
    );
};

const TextFieldComponent = TextField;
export default TextFieldComponent;
