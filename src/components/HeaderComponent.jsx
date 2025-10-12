import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import productoStyles from '../assets/styles/producto-styles.css'
import LoginUser from './Loging';



function HeaderComponent() {
    const [showLogin, setShowLogin] = React.useState(false);

    return (
        <>
        <Navbar expand="lg" className={` ${productoStyles.navbar} `}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                        
                        <Nav.Link onClick={() => {setShowLogin(true)}}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <LoginUser show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
    )
};
export default HeaderComponent;