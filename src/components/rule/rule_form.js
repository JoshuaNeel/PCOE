import React from 'react';
import { fetch_dummy_data } from '../../actions/rule_actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import RadioButton from '../../common_components/input_elements/radiobutton';
import Container from 'react-bootstrap/Container';
import { Form, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Select from '../../common_components/input_elements/select';
import ButtonComp from '../../common_components/input_elements/button';
import GroupDetail from './group_detail';
export default function rule_form() {
  const state = useSelector((state) => state);
    const dispatch = useDispatch();
    dispatch(fetch_dummy_data())
  return (
    <section className={'rule_container'}>
      <Container>
        <Form>
        <RadioButton />
        <section style={{margin:"18px 0"}}>
          <Select style={{display:"inline-block"}}/>
          <span style={{display:"inline-block",margin:"0 20px"}}>Or</span>
          <ButtonComp />
        </section>
        <section>
          <GroupDetail />
        </section>
        </Form>
      </Container>
    </section>
  )
}
