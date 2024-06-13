import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/seneca_creek_sprigs_logo_no_text_corrected.png";
import { Link, useNavigate } from "react-router-dom";

export const EmployeeNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar fixed="top" bg="light" data-bs-theme="light">
        <Container className="p-0">
          <Navbar.Brand href="/">
            <img
              src="src\assets\seneca_creek_sprigs_logo_no_text_corrected.png"
              width="30"
              height="30"
              alt=""
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/flowers">Flowers</Nav.Link>
            <Nav.Link as={Link} to="/retailers">Retailers</Nav.Link>
            <Nav.Link as={Link} to="/distributors">Distributors</Nav.Link>
            <Nav.Link as={Link} to="/nurseries">Nurseries</Nav.Link>
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
