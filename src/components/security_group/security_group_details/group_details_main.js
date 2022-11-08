/*
This file contains the
code related to the
security gruop details component
*/
import TickersGridView from "./tickers_grid_view";
import {Container, Row, Col} from "react-bootstrap";
import ReadOnlyInputComponent from
"../../../common_components/input_elements/readOnlyInput";
import InputViewSection from "./input_view_section";
const filtersSelectedStyles = {
    backgroundColor: 'rgba(253.33,253.33,253.33,1)',
    marginTop: '1rem',
    boxSizing: 'border-box',
    color: '#767676',
    fontFamily: 'roboto',
    fontSize: "14px",
    borderColor: '#E8E8E8 1px solid',
    boxShadow: '1px 1px 1px 1px rgb(99 98 98 / 20%)',
    borderRadius: '10px',
    border: '1px solid #ccc',
    padding: '20px',
    width: '95%'
};
export default function GroupDetailsMain(props) {
    const groupDetails = props.rowData;
    return (
        <div className='card grid_wrapper'>
            <InputViewSection details={groupDetails} />
            <div>

            <Container fluid
                style={
                    filtersSelectedStyles
            }>
                <Row>
                    <Col xs
                        lg={3}>L1/L2: l1 = 12</Col>
                    <Col xs
                        lg={3}>PME Group: {
                        groupDetails.groupname
                    }</Col>

                    <Col xs
                        lg={3}>Productgroup to exculde: {
                        groupDetails.productsToExclude
                    }</Col>
                    <Col xs
                        lg={3}>Marginability: M</Col>

                </Row>
                <Row>
                    <Col xs
                        lg={3}>Country of origin: France</Col>
                    <Col xs
                        lg={3}>Productgroup to include: {
                        groupDetails.productGroupToInclude
                    }</Col>
                    <Col xs
                        lg={3}>Options inclusion: France</Col>
                </Row>
            </Container>
            </div>
            <TickersGridView isCheckbox={false}/>

        </div>
    )
}
