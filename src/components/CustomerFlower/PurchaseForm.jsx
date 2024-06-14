/* eslint-disable react/prop-types */
// src/components/Flowers/PurchaseForm.jsx
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

export const PurchaseForm = ({ show, handleClose, handleSave, currentFlower }) => {
    const [order, setOrder] = useState({ qty: '', flowerId: null })

    useEffect(() => {
        if (currentFlower) {
            setOrder({ qty: '', flowerId: currentFlower.id })
        } else {
            setOrder({ qty: '', flowerId: null })
        }
    }, [currentFlower])

    const handleChange = (e) => {
        const { name, value } = e.target
        setOrder(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = () => {
        handleSave(order)
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Purchase Flower</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Qty</Form.Label>
                        <Form.Control
                            type="number"
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
                    Purchase Flower
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

