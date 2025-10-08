import { useEffect } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logotipo from '../../assets/images/principal/LogoTipo.png';

export default function BarraMenu({ show, onHide }) {
    useEffect(() => {
        document.body.classList.toggle('non-scroll', show);
        return () => document.body.classList.remove('non-scroll');
    }, [show]);

    return (
        <Offcanvas show={show} onHide={onHide} placement="start" backdrop="static" className="barra-menu-offcanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img src={logotipo} alt="LogoTipo" width={110} style={{ marginBottom: "-16px" }} />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* Botón inicio sesión/registro */}
                <div className="d-flex justify-content-center mb-3">
                    <Button
                        as={Link}
                        to="/login"
                        variant="primary"
                        style={{
                            fontWeight: 600,
                            fontSize: "1rem",
                            borderRadius: "22px",
                            padding: "0.6rem 1.4rem"
                        }}
                    >
                        Iniciar sesión o crea una cuenta
                    </Button>
                </div>
                {/* Sección búsqueda */}
                <div style={{ padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
                    <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "1.05rem" }}>
                        <i className="bi bi-search" style={{ fontSize: "1.3rem" }}></i>
                        <span>¿Qué estás buscando hoy?</span>
                    </div>
                    <div style={{ fontSize: "0.96rem", color: "#444", marginBottom: "7px" }}>
                        <strong>Supermercado</strong>
                        <div style={{ fontSize: "0.92rem", color: "#888" }}>
                            Todo lo que necesitas para tu despensa, ¡y más!
                        </div>
                    </div>
                    <div style={{
                        fontSize: "0.97rem",
                        background: "#f2f8ff",
                        borderRadius: "6px",
                        marginBottom: "5px",
                        padding: "4px 8px"
                    }}>
                        <strong>Mundo Huerto</strong>
                        <div style={{ color: "#1d7bcc", fontSize: "0.93rem" }}>
                            Miles de productos frescos, hogar y jardín
                        </div>
                    </div>
                </div>
                {/* Sección de accesos */}
                <div style={{ borderBottom: "1px solid #f0f0f0", padding: "14px 0" }}>
                    <div className="d-flex align-items-center gap-2 mb-3" style={{ cursor: "pointer" }}>
                        <i className="bi bi-receipt" style={{ fontSize: "1.2rem" }}></i>
                        <span>Mis Pedidos</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-3" style={{ cursor: "pointer" }}>
                        <i className="bi bi-person" style={{ fontSize: "1.2rem" }}></i>
                        <span>Cuenta</span>
                    </div>
                </div>
                {/* Ayuda y categorías */}
                <div style={{ padding: "14px 0" }}>
                    <div className="d-flex align-items-center gap-2 mb-3" style={{ cursor: "pointer" }}>
                        <i className="bi bi-question-circle" style={{ fontSize: "1.2rem" }}></i>
                        <span>Ayuda</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-3" style={{ cursor: "pointer" }}>
                        <i className="bi bi-grid" style={{ fontSize: "1.2rem" }}></i>
                        <span>Categorías</span>
                        <i className="bi bi-chevron-right ms-auto" style={{ fontSize: "1.2rem" }}></i>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}