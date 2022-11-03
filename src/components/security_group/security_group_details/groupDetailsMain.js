/*
This file contains the
code related to the
security gruop details component
*/
import TickersGridView from "./tickers_grid_view";
import { Container, Row, Col } from "react-bootstrap";
import ReadOnlyInputComponent from
 "../../../common_components/input_elements/readOnlyInput";
export default function GroupDetailsMain(props){
  const groupDetails = props.rowData;
  console.log(groupDetails);
    return(
        <div className='card grid_wrapper'>
              <Row>
                <Col xs lg={4}>
                  <ReadOnlyInputComponent displayValue={groupDetails.groupname}
                  labelValue={'Group Name'} />  
                </Col>
                <Col xs lg={4}>
                <ReadOnlyInputComponent displayValue={groupDetails.LOB}
                labelValue={'LOB'} />  
                </Col>
              </Row>
              <Container fluid style={{backgroundColor: '#FAFAFA', fontFamily: 'roboto', fontSize: 14, borderColor: '#E8E8E8'}}>
              <Row>
                    <Col xs lg={3}>L1/L2: l1 = 12</Col>
                    <Col xs lg={3}>PME Group: {groupDetails.groupname}</Col>

                    <Col xs lg={3}>Productgroup to exculde: {groupDetails.productsToExclude}</Col>
                    <Col xs lg={3}>Marginability: M</Col>

                </Row>
                <Row>
                    <Col xs lg={3}>Country of origin: France</Col>
                    <Col xs lg={3}>Productgroup to include: {groupDetails.productGroupToInclude}</Col>
                    <Col xs lg={3}>Options inclusion: France</Col>
                </Row>
              </Container>
              <TickersGridView />

          </div>
    )
}
