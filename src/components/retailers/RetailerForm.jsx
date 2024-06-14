import React, { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { getRetailerById, createRetailer, updateRetailer } from '../../services/retailerService';

export const RetailerForm = ({ show, handleClose, handleSave, currentRetailer, mode }) => {
  const [retailer, setRetailer] = useState({ businessName: '', address: '', flowerMarkup: '' });

  useEffect(() => {
    if (currentRetailer) {
      setRetailer(currentRetailer);
    } else {
      setRetailer({ businessName: '', address: '', flowerMarkup: '' });
    }
  }, [currentRetailer]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRetailer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave(retailer);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{mode === 'add' ? 'Add Retailer' : 'Modify Retailer'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Business Name</Form.Label>
            <Form.Control
              type="text"
              name="businessName"
              value={retailer.businessName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={retailer.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Flower Markup</Form.Label>
            <Form.Control
              type="text"
              name="flowerMarkup"
              value={retailer.flowerMarkup}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {mode === 'add' ? 'Add Retailer' : 'Save Changes'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};