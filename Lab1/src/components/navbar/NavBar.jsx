import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
export const NavBar = () => {
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar;