import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className=" font-dmsans sticky top-0 z-0">
      <Container>
        <Navbar.Brand href="#home" className="text-slate-50 font-bold text-3xl">
          J.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto -mr-10">
            <Nav.Link
              href="#home"
              className="px-[42px] text-[#A4D0D8] font-medium"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#my-story"
              className="px-[42px] text-[#A4D0D8] font-medium"
            >
              My Story
            </Nav.Link>
            <Nav.Link
              href="#hostels"
              className="px-[42px] text-[#A4D0D8] font-medium"
            >
              Hostels
            </Nav.Link>
            <Nav.Link
              href="#books"
              className="px-[42px] text-[#A4D0D8] font-medium"
            >
              Books
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="px-[42px] text-[#A4D0D8] font-medium"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
