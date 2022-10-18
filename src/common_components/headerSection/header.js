import React from 'react'
import Logo from '../../assets/images/logo/Bank-of-America-Logo1.png';
import Container from 'react-bootstrap/Container';
import { Col, Stack, Row } from 'react-bootstrap/';
import './headerStyles.scss';

export default function Header() {
  return (
    <Container className="bofacontainer" fluid>
        <header className="headerContainer">
        <Row className="justify-content-start" style={{marginTop: '-10px', height: '80px'}}>
          <Col className="verticalBar" lg={4} xs={8}>
            <img
              className="boaIcon"
              alt="BOFA"
              src={Logo}
            />
          </Col>
          <Col lg={2} xs={2}>
            <p className="pcoeText">PCOE</p>
          </Col>
        </Row>
      </header>
    </Container>
  );
}
