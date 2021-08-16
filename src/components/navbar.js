import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../estilos/navbar.css";

const NavBar = () => {

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Mundo Celíaco</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Cómo comprar</Nav.Link>
              <Nav.Link href="#pricing">Envíos</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bakery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Alacena action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Granel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Lácteos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Congelados</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Carrito
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    </header>
  )
}

export default NavBar;