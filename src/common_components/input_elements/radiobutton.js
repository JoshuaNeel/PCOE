import React,{useState} from 'react';
import { Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Label from 'react-bootstrap/Form';

export default function radiobutton({ label, options }) {
  const [value,setValue] = useState('')
  function onChangeRadio(e){
    setValue(e.target.value);
  }
  return (
      <>
        <Form.Label className={'rule_effect_label'}>Rule effectiveness</Form.Label>
        <Form.Group controlId='value'>
          <Form.Check
            inline
            value="Immediate"
            type="radio"
            aria-label="Immediate"
            label="Immediate"            
            onChange={onChangeRadio}
            checked={value === 'Immediate'}
          />
          <Form.Check
            inline
            value="NextDay"
            type="radio"
            aria-label="Next Day"
            label="Next Day"
            onChange={onChangeRadio}
            checked={value === 'NextDay'}
          />
        </Form.Group>
      </>
  )
}
