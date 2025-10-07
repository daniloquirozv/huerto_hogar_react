import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import productoStyles from '../assets/styles/producto-styles.css'
import logotipo from '../assets/images/Productos/LogoTipo.png'




function HeaderComponent() {
    const handleContactoClick = (e) => {
        e.preventDefault();
        const contactoElement = document.getElementById('Contacto');
        if (contactoElement) {
            contactoElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <Navbar expand="lg" className={` ${productoStyles.navbar} `}>
            <Container>
                <Navbar.Brand href=""><img src={logotipo} alt="Logotipo" title='Huerto Hogar' width={100} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">                        
                        <Nav.Link as={Link} to={'/producto'}>Inicio</Nav.Link>
                        <Nav.Link as={Link} to={'/producto'}>Productos</Nav.Link>
                        <Nav.Link as={Link} to={'/producto'}>Blog</Nav.Link>
                        <Nav.Link href='#Contacto' onClick={handleContactoClick}>Contacto</Nav.Link>
                        <Nav.Link as={Link} to={'/producto'}>Inicio Sesion</Nav.Link>
                    </Nav>             
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    );
}
export default HeaderComponent;