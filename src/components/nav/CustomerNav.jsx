import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const CustomerNav = () => {
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
