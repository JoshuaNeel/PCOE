import React from 'react'
import Container from 'react-bootstrap/Container';
import { Col, Stack, Row } from 'react-bootstrap/';


export const RoutingDashboardHeader = (props) => {

    return (
        <Container fluid>
            <Row className="justify-content-md-start">
            <Col className="verticalBar" xs lg="2" style={{textAlign: 'end'}} fluid>
                <p className="routingDashboard" style={{color: 'rgba(2,33,105,1)',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal',fontSize: '22px', marginBottom: '0px'}}>Routing Dashboard</p>
            </Col>
            <Col xs lg="9">
                <p style={{color: 'rgba(2,33,105,1)',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal',fontSize: '18px', marginBottom: '0px', marginTop: '2px'}} className="routingTab" >{props.tabName}</p>
            </Col>
            </Row>
        </Container>
    )
}