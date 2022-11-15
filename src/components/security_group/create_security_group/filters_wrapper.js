/*
This file contains the
code related to
the filters wrapper of the
create security group
*/

import Accordion from "../../../common_components/filters/Accordion";
import DropDownComponent from "../../../common_components/input_elements/dropdown";
import TextFieldComponent from "../../../common_components/input_elements/text_field";


const FiltersWrapper  = ()=>{
    return(
        <div>
            Filters component
            <TextFieldComponent inputStyle={{height: '40px'}}
             placeholder={'Enter Group Name'} />
            <DropDownComponent value={['value1','value2']} />
            <h2>Filters</h2>
            <Accordion  />
        </div>
    );
};

const SecurityFiltersWrapper = FiltersWrapper;
export default SecurityFiltersWrapper;
