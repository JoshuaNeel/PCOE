/*
This file contains the
code related to the
security gruop details component
*/
import TickersGridView from "./tickers_grid_view";
import { Container, Row, Col } from "react-bootstrap";
export default function GroupDetailsMain(props){
  const groupDetails = props.rowData;
  console.log(groupDetails);
    return(
        <div className='security_group_grid1'>
          <TickersGridView />
            <div className='security_group_grid'>
              {props.rowData.groupname}
              <Container fluid style={{backgroundColor: '#FAFAFA', fontFamily: 'roboto', fontSize: 14, borderColor: '#E8E8E8'}}>
              <Row>
                    {/* <Col xs lg={3}>
                        <span>L1/L2: </span>
                        {groupDetails.l1-l2.map((item, index) => (
                            <span key={index}>{ (index ? ', ' : '') + item }</span>
                        ))}
                    </Col> */}
                    <Col xs lg={3}>L1/L2: l1 = 12</Col>
                    <Col xs lg={3}>PME Group: {groupDetails.groupname}</Col>

                    {/* <Col xs lg={3}>
                        <span>PME Group: </span>
                        {groupDetails.pme_group.map((item, index) => (
                            <span key={index}>{ (index ? ', ' : '') + item }</span>
                        ))}
                    </Col> */}
                    {/* <Col xs lg={3}>
                        <span>Productgroup to exculde: </span>
                        {groupDetails.productsToExclude.map((item, index) => (
                            <span key={index}>{ (index ? ', ' : '') + item }</span>
                        ))}
                    </Col> */}
                    <Col xs lg={3}>Productgroup to exculde: {groupDetails.productsToExclude}</Col>
                    <Col xs lg={3}>Marginability: M</Col>

                    {/* <Col xs lg={3}>Marginability: {groupDetails.marginability}</Col> */}
                </Row>
                <Row>
                    {/* <Col xs lg={3}>Country of origin: {groupDetails.country_of_origin}</Col> */}
                    <Col xs lg={3}>Country of origin: France</Col>
                    <Col xs lg={3}>Productgroup to include: {groupDetails.productGroupToInclude}</Col>

                    {/* <Col xs lg={3}>
                        <span>Productgroup to include: </span>
                        {groupDetails.productGroupToInclude.map((item, index) => (
                            <span key={index}>{ (index ? ', ' : '') + item }</span>
                        ))}
                    </Col> */}
                    <Col xs lg={3}>Options inclusion: France</Col>
                    {/* <Col xs lg={3}>Options inclusion: {groupDetails.option_inclusion}</Col> */}
                </Row>
              </Container>
            </div>
          </div>
    )
}