import { Offcanvas, Button } from "react-bootstrap";

export default function CarritoMenu({ show, handleClose, carritoItems }) {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-center">
                {carritoItems.length === 0 ? (
                    <>
                        <p className="fw-bold">Tu carro está vacío</p>
                        <p>Navega por las ofertas y categorías</p>
                        <Button variant="danger">Inténtalo aquí</Button>
                    </>
                ) : (
                    <ul>
                        {carritoItems.map((item, idx) => (
                            <li key={idx}>{item.nombre} x{item.cantidad}</li>
                        ))}
                    </ul>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}