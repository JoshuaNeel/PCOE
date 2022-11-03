/*
This file contains the
code related to the
accordian
*/
import Accordion from 'react-bootstrap/Accordion';
import DropDownComponent from './input_elements/dropdown';

const Accordian =(props) =>{
    return(
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.labelName}</Accordion.Header>
          <Accordion.Body>
            
          <DropDownComponent />

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
};

const AccordianComponent = Accordian;
export default AccordianComponent;
