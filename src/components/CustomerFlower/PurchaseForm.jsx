
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

export const PurchaseForm = ({ show, handleClose, handleSave, currentflower }) => {
    const [flower, setFlower] = useState({ qty: ''})

    useEffect(() => {
        if (currentflower) {
            setFlower(currentflower)
        }  else {
            setFlower({ qty: '' })
        }
    }, [currentflower])

    const handleSubmit = () => {
        handleSave(flower)
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {'Purchase Flower'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Qty</Form.Label>
                        <Form.Control
                            type="text"
                            name="qty"
                            value={order.qty}
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
                    {'Purchase Flower'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}