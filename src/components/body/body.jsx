import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/principal-style.css'
import fondo from '../../assets/images/principal/fondo3.avif';
import logotipo from '../../assets/images/principal/LogoTipo.png';
import Carrusel from "./carrusel";
import Podio from "./podio";


export default function Body() {

    return (
        <main>
            {/* Hero Section */}
            <section className="hero bg-light position-relative overflow-hidden" id="hero">
                <div className="hero-background position-absolute w-100 h-100" style={{
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    opacity: 0.1,
                    zIndex: 1
                }}></div>
                <Container className="position-relative" style={{ zIndex: 2 }}>
                    <Row className="align-items-center min-vh-50 py-5">
                        <Col lg={8} className="mx-auto text-center">
                            <Badge bg="success" className="mb-3 fs-6">
                                Cultivo Urbano
                            </Badge>
                            <h1 className="display-4 fw-bold text-primary mb-3">
                                Bienvenido a <span className="text-success">HuertoHogar</span>
                            </h1>
                            <p className="lead text-muted mb-4 fs-5">
                                Tu tienda en línea de productos frescos y orgánicos del campo. Cultivados con dedicación
                                por agricultores locales y entregados directamente a tu hogar.
                            </p>
                            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                                <Button
                                    variant="success"
                                    size="lg"
                                    className="shadow-lg px-4 py-3"
                                    href="#productos"
                                >
                                    <i className="fas fa-seedling me-2"></i>
                                    Explorar Productos
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Catálogo Section */}
            <Carrusel />
            {/* Podio de Productos Más Vendidos */}
            <Podio />
            <section className="blog-promo-image-bg">
                <div className="blog-promo-content">
                    <img
                        src={logotipo}
                        alt="HuertoHogar"
                        className="blog-promo-logo"
                    />
                    <h2 className="blog-promo-title">¡Descuentos frescos en HuertoHogar!</h2>
                    <h5 className="blog-promo-subtitle">Precios bajos para tu alimentación saludable</h5>
                    <p className="blog-promo-text">
                        Descubre nuestras últimas ofertas en frutas y verduras orgánicas.<br />
                        ¡No te pierdas las novedades y consejos en nuestro blog!
                    </p>
                    <Button as={Link} to="/blog" variant="success" className="blog-promo-btn">
                        Visitar Blog
                    </Button>
                    <div className="blog-promo-news">
                        <strong>Noticia:</strong> <br />
                        ¡Ya comenzó el mes de los descuentos en productos seleccionados! <span role="img" aria-label="fruta">🍓</span><span role="img" aria-label="lechuga">🥬</span>
                    </div>
                </div>
            </section>
        </main>
    )
}