import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">J.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="px-4">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="px-4">
              My Story
            </Nav.Link>
            <Nav.Link href="#link" className="px-4">
              Work
            </Nav.Link>
            <Nav.Link href="#link" className="px-4">
              Blog
            </Nav.Link>
            <Nav.Link href="#link" className="px-4">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
