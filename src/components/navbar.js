import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import "../estilos/navbar.css";

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">Mundo Celíaco</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Cómo comprar</Nav.Link>
            <Nav.Link href="#">Envíos</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Bakery</NavDropdown.Item>
              <NavDropdown.Item href="#">Alacena</NavDropdown.Item>
              <NavDropdown.Item href="#">Granel</NavDropdown.Item>
              <NavDropdown.Item href="#">Lácteos</NavDropdown.Item>
              <NavDropdown.Item href="#">Congelados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Iniciar sesión</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  )
}

export default NavBar;