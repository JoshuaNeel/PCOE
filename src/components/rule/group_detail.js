import React from 'react'
import { Form, Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
export default function GroupDetail() {
  return (
    <>
        <Form.Label className={'rule_effect_label'}>Group name</Form.Label>
        <section className='box'>
        <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"300px"}} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"300px"}} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"300px"}} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"300px"}} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"300px"}} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"300px"}} placeholder="name@example.com" />
      </Form.Group>       
    </section>
    
    <Button variant="primary" style={{textTransform:"uppercase"}} style={{margin:"10px 0"}}>Submit</Button> 
    </>
  )
}
