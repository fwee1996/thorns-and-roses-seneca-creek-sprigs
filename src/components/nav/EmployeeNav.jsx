import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const EmployeeNav = () => {
  return (
    <>
      <Navbar fixed="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/flowers">Flowers</Nav.Link>
            <Nav.Link href="/retailers">Retailers</Nav.Link>
            <Nav.Link href="/distributors">Distributors</Nav.Link>
            <Nav.Link href="/nurseries">Nurseries</Nav.Link>
            <Nav.Link
              href="/"
              onClick={() => {
                localStorage.removeItem("sprig_user");
                navigate("/", { replace: true });
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
