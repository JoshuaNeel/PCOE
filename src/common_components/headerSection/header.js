import React from 'react'
import Logo from '../../assets/images/logo/Bank-of-America-Logo1.png';
import Container from 'react-bootstrap/Container';
import { Col, Stack, Row } from 'react-bootstrap/';
import './headerStyles.scss';
import Image from 'react-bootstrap/Image'

export default function Header() {
  return (
    <Container className="bofacontainer" fluid>
        <Row className="justify-content-md-center" style={{height: '100%'}}>
          <Col className="verticalBar" xs lg="3">
            <Image fluid
              className="boaIcon"
              alt="BOFA"
              src={Logo}
              style={{marginTop: '4%', height: '60%'}}
            />
          </Col>
          <Col xs lg="7">
            <p className="pcoeText">PCOE</p>
          </Col>
        </Row>
    </Container>
  );
}
