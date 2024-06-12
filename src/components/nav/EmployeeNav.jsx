import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const EmployeeNav = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/flowers">Flowers</Nav.Link>
            <Nav.Link href="/retailers">Retailers</Nav.Link>
            <Nav.Link href="/distributors">Distributors</Nav.Link>
            <Nav.Link href="/nurseries">Nurseries</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}