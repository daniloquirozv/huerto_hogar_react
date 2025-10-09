import { Col, Container, Row } from "react-bootstrap";
import '../../assets/principal-style.css';

export default function Footer() {
    return (
        <footer className="footer-eco text-white pt-5">
            {/* Sección principal del footer */}
            <Container className="py-5">
                <Row className="gy-4">
                    {/* Columna izquierda - Información de contacto */}
                    <Col lg={4} md={6}>
                        {/* Tiendas asociadas */}
                        <div className="mt-4">
                            <h6 className="eco-title mb-3">
                                <i className="bi bi-shop me-2 text-black"></i>
                                Tiendas Asociadas
                            </h6>
                            <div className="footer-list text-start">
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Santiago
                                </small>
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Viña del Mar
                                </small>
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Valparaíso
                                </small>
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Villarica
                                </small>
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Nacimiento
                                </small>
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Puerto Montt
                                </small>
                                <small className="d-flex align-items-center mb-2">
                                    <i className="bi bi-shop me-2 text-black"></i>Concepción
                                </small>
                            </div>
                        </div>
                    </Col>

                    {/* Columna centro - Mapa */}
                    <Col lg={4} md={6} className="text-center">
                        <h5 className="eco-title mb-4">
                            <i className="bi bi-geo-alt me-2 text-black"></i>
                            Encuéntranos
                        </h5>
                        <div className="footer-mapa rounded-4 overflow-hidden shadow-sm mb-3">
                            {/* Aquí irá el mapa real - por ahora un placeholder */}
                            <iframe
                                src="https://www.google.com/maps/d/u/2/embed?mid=16NlqHEBeBW25AW-x576Unqn466E82QU&ehbc=2E312F"
                                className="ratio ratio-16x9"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación HuertoHogar"
                            ></iframe>
                        </div>
                    </Col>

                    {/* Columna derecha - Redes sociales */}
                    <Col lg={4} md={12} className="text-center">
                        <h5 className="eco-title mb-4">
                            <i className="bi bi-share me-2 text-black"></i>
                            Síguenos
                        </h5>
                        <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            Mantente conectado con nosotros en nuestras redes sociales
                        </p>

                        {/* Botones de redes sociales */}
                        <div className="footer-social mb-4">
                            <a
                                className="social-link"
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                className="social-link"
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                className="social-link"
                                href="https://wa.me/56912345678"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-whatsapp"></i>
                            </a>

                            <a
                                className="social-link"
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Línea divisoria */}
            <div style={{ background: 'rgba(255, 255, 255, 0.2)', height: '1px', margin: '0 2rem' }}></div>

            {/* Sección de derechos reservados - Centro */}
            <Container className="pb-4">
                <Row>
                    <Col className="text-center py-4">
                        <p className="mb-3" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }}>
                            © 2024 <span className="text-white fw-bold" style={{ color: '#a8d5a3 !important' }}>HuertoHogar</span>.
                            Todos los derechos reservados.
                        </p>
                        <div className="footer-links mb-3">
                            <a href="#privacy" className="text-decoration-none me-4">
                                Política de Privacidad
                            </a>
                            <a href="#terms" className="text-decoration-none me-4">
                                Términos y Condiciones
                            </a>
                            <a href="#cookies" className="text-decoration-none">
                                Política de Cookies
                            </a>
                        </div>
                        <div className="d-flex justify-content-center align-items-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            <i className="fas fa-leaf text-success me-2" style={{ fontSize: '1.2rem' }}></i>
                            <span style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
                                Cultivando el futuro, un hogar a la vez
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

