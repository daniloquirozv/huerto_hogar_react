import { Badge, Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/style.css'

const productosMasVendidos = [
    {
        nombre: "Frutillas Orgánicas",
        imagen: "/frutillas.jpg",
        descripcion: "Dulces y frescas, favoritas de la temporada.",
    },
    {
        nombre: "Lechuga Hidropónica",
        imagen: "/lechuga.jpg",
        descripcion: "Crujiente y lista para tu ensalada.",
    },
    {
        nombre: "Tomate Cherry",
        imagen: "/tomate.jpg",
        descripcion: "Pequeños y sabrosos, perfectos para snacks.",
    },
];

export default function Body() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero bg-light position-relative overflow-hidden" id="hero">
                <div className="hero-background position-absolute w-100 h-100" style={{
                    backgroundImage: 'url("/fondo3.avif")',
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
            <section className="py-5 bg-white" id="catalogo">
                <Container >
                    <Row className="mb-5">
                        <Col lg={8} className="mx-auto text-center">
                            <h2 className="display-5 fw-bold text-success mb-3">Nuestro Catálogo</h2>
                            <p className="lead text-muted">
                                Productos Frescos y Alimentos Orgánicos
                            </p>
                        </Col>
                    </Row>
                    <Carousel interval={4000} indicators={true} controls={true}>
                        {/* Frutas*/}
                        <Carousel.Item>
                            <Row className="justify-content-center">
                                <Col lg={4} md={6}>
                                    <Card className="h-100 shadow-sm border-0 product-card">
                                        <Card.Img
                                            variant="top"
                                            src="/Catalogo-Fruta.jpg"
                                            alt="Frutas Frescas"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body className="d-flex flex-column">
                                            <Badge bg="success" className="align-self-start mb-2">
                                                Frutas
                                            </Badge>
                                            <Card.Title className="h5 fw-bold">Frutas Frescas</Card.Title>
                                            <Card.Text className="text-muted flex-grow-1">
                                                Frutas frescas y jugosas, cultivadas localmente para garantizar la mejor calidad y sabor.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* Verduras */}
                        <Carousel.Item>
                            <Row className="justify-content-center">
                                <Col lg={4} md={6}>
                                    <Card className="h-100 shadow-sm border-0 product-card">
                                        <Card.Img
                                            variant="top"
                                            src="/Catalogo-Verdura.png"
                                            alt="Verduras Orgánicas"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body className="d-flex flex-column">
                                            <Badge bg="success" className="align-self-start mb-2">
                                                Verduras
                                            </Badge>
                                            <Card.Title className="h5 fw-bold">Verduras Orgánicas</Card.Title>
                                            <Card.Text className="text-muted flex-grow-1">
                                                Verduras orgánicas, libres de pesticidas y cultivadas con prácticas sostenibles.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* Productos Orgánicos */}
                        <Carousel.Item>
                            <Row className="justify-content-center">
                                <Col lg={4} md={6}>
                                    <Card className="h-100 shadow-sm border-0 product-card">
                                        <Card.Img
                                            variant="top"
                                            src="/Catalogo-Organico.png"
                                            alt="Productos Orgánicos"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body className="d-flex flex-column">
                                            <Badge bg="success" className="align-self-start mb-2">
                                                Orgánicos
                                            </Badge>
                                            <Card.Title className="h5 fw-bold">Productos Orgánicos</Card.Title>
                                            <Card.Text className="text-muted flex-grow-1">
                                                Una variedad de productos orgánicos, desde granos hasta snacks saludables, para un estilo de vida consciente.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        {/* Productos Lacteos */}
                        <Carousel.Item>
                            <Row className="justify-content-center">
                                <Col lg={4} md={6}>
                                    <Card className="h-100 shadow-sm border-0 product-card">
                                        <Card.Img
                                            variant="top"
                                            src="/Catalogo-Lacteos.png"
                                            alt="Productos Lácteos"
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body className="d-flex flex-column">
                                            <Badge bg="success" className="align-self-start mb-2">
                                                Lácteos
                                            </Badge>
                                            <Card.Title className="h5 fw-bold">Productos Lácteos</Card.Title>
                                            <Card.Text className="text-muted flex-grow-1">
                                                Una variedad de productos lácteos, desde yogures hasta quesos, para un estilo de vida consciente.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
            <section id="podio" style={{ margin: '2rem 0' }}>
                <Container>
                    <h2 className="text-center mb-4"><i className="bi bi-trophy"></i> Producto más vendidos</h2>
                    <Row className="justify-content-center align-items-end">
                        {/* Segundo lugar */}
                        <Col xs={6} md={4} className="text-center">
                            <Card>
                                <Card.Img variant="top" src={productosMasVendidos[1].imagen} alt={productosMasVendidos[1].nombre} />
                                <Card.Body>
                                    <Card.Title>🥈 {productosMasVendidos[1].nombre}</Card.Title>
                                    <Card.Text>{productosMasVendidos[1].descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Primer lugar */}
                        <Col xs={6} md={4} className="text-center" style={{ marginBottom: '-16px' }}>
                            <Card>
                                <Card.Img variant="top" src={productosMasVendidos[0].imagen} alt={productosMasVendidos[0].nombre} />
                                <Card.Body>
                                    <Card.Title>🥇 {productosMasVendidos[0].nombre}</Card.Title>
                                    <Card.Text>{productosMasVendidos[0].descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Tercer lugar */}
                        <Col xs={6} md={4} className="text-center">
                            <Card>
                                <Card.Img variant="top" src={productosMasVendidos[2].imagen} alt={productosMasVendidos[2].nombre} />
                                <Card.Body>
                                    <Card.Title>🥉 {productosMasVendidos[2].nombre}</Card.Title>
                                    <Card.Text>{productosMasVendidos[2].descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="blog-promo-image-bg">
                <div className="blog-promo-content">
                    <img
                        src="/LogoTipo.png"
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