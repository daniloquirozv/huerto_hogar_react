import { Col, Container, Row, Button } from "react-bootstrap";

export default function Footer(){
    return(
        <footer className=" text-light">
            {/* Sección principal del footer */}
            <Container className="py-5">
                <Row className="gy-4">
                    {/* Columna izquierda - Información de contacto */}
                    <Col lg={4} md={6}>
                        <h5 className="text-success mb-3">
                            <i className="bi bi-shop me-2"></i>
                            HuertoHogar
                        </h5>
                        <p className="text-muted mb-3">
                            Tu tienda en línea de productos frescos y orgánicos del campo. 
                            Cultivados con dedicación por agricultores locales.
                        </p>
                        <div className="contact-info">
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt text-success me-2"></i>
                                Av. Principal 1234, Santiago, Chile
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-phone text-success me-2"></i>
                                +56 9 1234 5678
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-envelope text-success me-2"></i>
                                contacto@huertohogar.cl
                            </p>
                        </div>
                    </Col>

                    {/* Columna centro - Mapa */}
                    <Col lg={4} md={6} className="text-center">
                        <h5 className="text-success mb-3">
                            <i className="bi bi-geo-alt me-2"></i>
                            Encuéntranos
                        </h5>
                        <div className="footer-map rounded-4 overflow-hidden shadow-sm mb-2">
                            {/* Aquí irá el mapa real - por ahora un placeholder */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0326!2d-70.6482500851965!3d-33.4376076980765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1633024800000!5m2!1ses!2scl"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación HuertoHogar"
                            ></iframe>
                        </div>
                    </Col>

                    {/* Columna derecha - Redes sociales */}
                    <Col lg={4} md={12} className="text-center">
                        <h5 className="text-success mb-3">
                            <i className="bi bi-share me-2"></i>
                            Síguenos
                        </h5>
                        <p className="text-muted mb-4">
                            Mantente conectado con nosotros en nuestras redes sociales
                        </p>
                        
                        {/* Botones de redes sociales */}
                        <div className="social-buttons d-flex flex-column gap-3">
                            <Button 
                                variant="outline-light" 
                                className="d-flex align-items-center justify-content-start p-3 social-btn facebook"
                                href="https://facebook.com"
                                target="_blank"
                            >
                                <i className="bi bi-facebook fa-lg me-3 text-primary"></i>
                                <span>Facebook</span>
                            </Button>
                            
                            <Button 
                                variant="outline-light" 
                                className="d-flex align-items-center justify-content-start p-3 social-btn instagram"
                                href="https://instagram.com"
                                target="_blank"
                            >
                                <i className="bi bi-instagram fa-lg me-3 text-danger"></i>
                                <span>Instagram</span>
                            </Button>
                            
                            <Button 
                                variant="outline-light" 
                                className="d-flex align-items-center justify-content-start p-3 social-btn whatsapp"
                                href="https://wa.me/56912345678"
                                target="_blank"
                            >
                                <i className="bi bi-whatsapp fa-lg me-3 text-success"></i>
                                <span>WhatsApp</span>
                            </Button>
                            
                            <Button 
                                variant="outline-light" 
                                className="d-flex align-items-center justify-content-start p-3 social-btn twitter"
                                href="https://twitter.com"
                                target="_blank"
                            >
                                <i className="bi bi-twitter fa-lg me-3 text-info"></i>
                                <span>Twitter</span>
                            </Button>
                        </div>

                        {/* Tiendas asociadas */}
                        <div className="mt-4">
                            <h6 className="text-success mb-3">Tiendas Asociadas</h6>
                            <div className="stores-list text-start">
                                <small className="d-block text-muted mb-1">
                                    <i className="fas fa-store me-2"></i>Santiago
                                </small>
                                <small className="d-block text-muted mb-1">
                                    <i className="fas fa-store me-2"></i>Viña del Mar
                                </small>
                                <small className="d-block text-muted mb-1">
                                    <i className="fas fa-store me-2"></i>Valparaíso
                                </small>
                                <small className="d-block text-muted mb-1">
                                    <i className="fas fa-store me-2"></i>Concepción
                                </small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Línea divisoria */}
            <hr className="border-secondary mx-4" />

            {/* Sección de derechos reservados - Centro */}
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p className="mb-2 text-muted">
                            © 2024 <span className="text-success fw-bold">HuertoHogar</span>. 
                            Todos los derechos reservados.
                        </p>
                        <div className="footer-links">
                            <a href="#privacy" className="text-muted text-decoration-none me-3 small">
                                Política de Privacidad
                            </a>
                            <a href="#terms" className="text-muted text-decoration-none me-3 small">
                                Términos y Condiciones
                            </a>
                            <a href="#cookies" className="text-muted text-decoration-none small">
                                Política de Cookies
                            </a>
                        </div>
                        <small className="text-muted d-block mt-2">
                            <i className="fas fa-leaf text-success me-1"></i>
                            Cultivando el futuro, un hogar a la vez
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

