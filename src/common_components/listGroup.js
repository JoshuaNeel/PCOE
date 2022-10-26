import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import React from 'react';



export const ListGroupModal = ({countries, show, close}) => {
    const allCountries = countries;

  return (
    <Modal.Dialog show={show} style={{width: '150px', borderRadius: '2px'}} onClick={() => {close();}}>
        <Modal.Body>
            <ListGroup>
                <ListGroup.Item variant="primary">Countries</ListGroup.Item>
                {allCountries.map((item) => <ListGroup.Item as='li' disabled={true}>{item}</ListGroup.Item>)}
            </ListGroup>
        </Modal.Body>
    </Modal.Dialog>
  );
}
