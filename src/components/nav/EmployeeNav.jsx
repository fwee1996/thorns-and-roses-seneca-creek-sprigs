import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const EmployeeNav = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flowers">Flowers</Nav.Link>
            <Nav.Link as={Link} to="/retailers">Retailers</Nav.Link>
            <Nav.Link as={Link} to="/distributors">Distributors</Nav.Link>
            <Nav.Link as={Link} to="/nurseries">Nurseries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
