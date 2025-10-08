import { useEffect } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BarraMenu({ show, onHide }) {
    useEffect(() => {
        document.body.classList.toggle('non-scroll', show);
        return () => document.body.classList.remove('non-scroll');
    }, [show]);

    return (
        <Offcanvas show={show} onHide={onHide} placement="start" backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img src="/LogoTipo.png" alt="LogoTipo" width={120} />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column text-center gap-3 mt-4">
                    <Nav.Link as={Link} to="/plantas">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                    <Nav.Link><i className="bi bi-person-circle fs-2"></i></Nav.Link>
                    <Nav.Link><i className="bi bi-cart3 fs-2"></i></Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}