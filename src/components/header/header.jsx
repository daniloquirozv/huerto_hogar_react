import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarritoMenu from "./carritoMenu";
import LoginModal from "./loginModal";
import BarraMenu from "./barraMenu";
import logotipo from '../../assets/images/principal/LogoTipo.png';

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const cartItems = []; // Vacío para mostrar el mensaje, o con items

    return (
        <>
            <Navbar bg="success" variant="dark" className="shadow">
                <Container className="d-flex align-items-center">
                    <div className="logo-menu-capsule d-flex align-items-center px-3 py-2">

                        <Button
                            className="menu-btn d-lg-none"
                            aria-label="Abrir menú"
                            onClick={() => setShowMenu(true)}
                            style={{
                                background: 'none',
                                border: 'none',
                                marginRight: '12px',
                                fontSize: '2rem',
                                color: 'white',
                            }}
                        >
                            <i className="bi bi-list"></i>
                        </Button>
                        <Navbar.Brand href="/">
                            <img src={logotipo} alt="LogoTipo" title="HuertoHogar" width={100} />
                        </Navbar.Brand>
                    </div>
                    {/* Menú principal siempre visible */}
                    <Nav className="mx-auto justify-content-center">
                        <Nav.Link as={Link} to="/plantas">Inicio</Nav.Link>
                        <Nav.Link href="#consejos">Productos</Nav.Link>
                        <Nav.Link href="#calendario">Blog</Nav.Link>
                        <Nav.Link href="#about">Contacto</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => setShowLogin(true)}>
                            <i className="bi bi-person-circle fs-2"></i>
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => setShowCart(true)}
                            style={{ position: 'relative', cursor: 'pointer' }}
                        >
                            <i className="bi bi-cart3 fs-2"></i>
                            <span
                                style={{
                                    position: "absolute",
                                    top: "4px",
                                    right: "4px",
                                    background: "red",
                                    color: "white",
                                    borderRadius: "50%",
                                    padding: "2px 6px",
                                    fontSize: "0.8em",
                                }}
                            >
                                {cartItems.length}
                            </span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <CarritoMenu show={showCart} handleClose={() => setShowCart(false)} carritoItems={cartItems} />
            <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
            <BarraMenu show={showMenu} onHide={() => setShowMenu(false)} />
        </>
    )
}