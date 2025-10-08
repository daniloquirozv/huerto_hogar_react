import { Badge, Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/principal-style.css'
import fondo from '../../assets/images/principal/fondo3.avif';
import logotipo from '../../assets/images/principal/LogoTipo.png';
import { productosMasVendidos as productosData } from "../../data/productosMasVendidos";
import Carrusel from "./carrusel";


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
            <section
                id="podio"
                style={{
                    margin: '2rem 0',
                    padding: '2rem 0',
                    background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
                    borderRadius: '32px',
                    boxShadow: '0 4px 24px rgba(60,80,220,0.08)',
                    position: 'relative'
                }}
            >
                <Container>
                    <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>
                        <i className="bi bi-trophy" style={{ color: '#FFD700', fontSize: '2.4rem', verticalAlign: 'middle', marginRight: '10px' }}></i>
                        Productos más vendidos
                    </h2>
                    <Row className="justify-content-center align-items-end">
                        {/* Segundo lugar */}
                        <Col xs={6} md={4} className="text-center" style={{ zIndex: 1 }}>
                            <Card style={{
                                width: '85%',
                                margin: '0 auto',
                                transform: 'translateY(32px)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.07)'
                            }}>
                                <Card.Img variant="top" src={productosData[1].imagen} alt={productosData[1].nombre} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.15rem', color: '#C0C0C0', fontWeight: 600 }}>🥈 {productosData[1].nombre}</Card.Title>
                                    <Card.Text>{productosData[1].descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                            {/* escalón */}
                            <div style={{
                                background: '#cfd8dc',
                                height: '18px',
                                width: '60%',
                                margin: '0 auto',
                                borderRadius: '0 0 16px 16px'
                            }}></div>
                        </Col>
                        {/* Primer lugar */}
                        <Col xs={6} md={4} className="text-center" style={{ zIndex: 2 }}>
                            <Card style={{
                                width: '100%',
                                margin: '0 auto',
                                border: '3px solid #FFD700',
                                boxShadow: '0 6px 24px rgba(255,215,0,0.18)',
                                transform: 'translateY(0)',
                                fontWeight: 'bold'
                            }}>
                                <Card.Img variant="top" src={productosData[0].imagen} alt={productosData[0].nombre} style={{ borderRadius: '16px 16px 0 0' }} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.33rem', color: '#FFD700', fontWeight: 700 }}>🥇 {productosData[0].nombre}</Card.Title>
                                    <Card.Text>{productosData[0].descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                            {/* escalón */}
                            <div style={{
                                background: '#ffe082',
                                height: '28px',
                                width: '70%',
                                margin: '0 auto',
                                borderRadius: '0 0 20px 20px',
                                boxShadow: '0 2px 14px rgba(255,215,0,0.08)'
                            }}></div>
                        </Col>
                        {/* Tercer lugar */}
                        <Col xs={6} md={4} className="text-center" style={{ zIndex: 1 }}>
                            <Card style={{
                                width: '85%',
                                margin: '0 auto',
                                transform: 'translateY(32px)',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.07)'
                            }}>
                                <Card.Img variant="top" src={productosData[2].imagen} alt={productosData[2].nombre} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.15rem', color: '#CD7F32', fontWeight: 600 }}>🥉 {productosData[2].nombre}</Card.Title>
                                    <Card.Text>{productosData[2].descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                            {/* escalón */}
                            <div style={{
                                background: '#bcaaa4',
                                height: '18px',
                                width: '60%',
                                margin: '0 auto',
                                borderRadius: '0 0 16px 16px'
                            }}></div>
                        </Col>
                    </Row>
                </Container>
            </section>
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