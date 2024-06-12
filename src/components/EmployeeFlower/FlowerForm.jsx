/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

export const FlowerForm = ({ show, handleClose, handleSave, currentflower, mode }) => {
    const  [flower, setFlower] = useState({ species: '', color: '' })
    
    useEffect(() => {
        if (currentflower) {
            setFlower(currentflower)
        }  else {
            setFlower({ species: '', color: '' })
        }
    }, [currentflower])

    const handleChange = (e) => {
        const { name, value } =e.target
        setFlower(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = () => {
        handleSave(flower)
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {mode === 'add' ? 'Add Flower' : 'Modify Flower'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Species</Form.Label>
                        <Form.Control
                            type="text"
                            name="species"
                            value={flower.species}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            name="color"
                            value={flower.color}
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
                    {mode === 'add' ? 'Add Flower' : 'Save Changes'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};