/*
This file contains the
code related to
the filters wrapper of the
create security group
*/

import AccordianComponent from "../../../common_components/accordian";
import Accordion from "../../../common_components/Accordion";
import DropDownComponent from "../../../common_components/input_elements/dropdown";
import TextFieldComponent from "../../../common_components/input_elements/text_field";


const FiltersWrapper  = ()=>{
    return(
        <div>
            Filters component
            <TextFieldComponent />
            <DropDownComponent />
            <h2>Filters</h2>
            {/* <AccordianComponent labelName={'L1/L2'} />
            <AccordianComponent labelName={'L1/L2'} />
            <AccordianComponent labelName={'L1/L2'} />
            <AccordianComponent labelName={'L1/L2'} />
            <AccordianComponent labelName={'L1/L2'} />
            <AccordianComponent labelName={'L1/L2'} /> */}
            <Accordion  title={'Section-1'} content={`section-1 content available`} />
        </div>
    );
};

const SecurityFiltersWrapper = FiltersWrapper;
export default SecurityFiltersWrapper;
