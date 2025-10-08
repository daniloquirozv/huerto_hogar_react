import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { productos } from '../data/productos';

function BuscadorProductos({ onAddToCart }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredProducts([]);
        } else {
            const filtered = productos.filter(producto =>
                producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                producto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchTerm]);

    const handleQuantityChange = (codigo, value) => {
        const numValue = parseInt(value) || 0;
        setQuantities(prev => ({
            ...prev,
            [codigo]: numValue > 0 ? numValue : 0
        }));
    };

    const handleAddToCart = (producto) => {
        const quantity = quantities[producto.codigo] || 1;
        if (quantity > 0 && quantity <= producto.stock) {
            onAddToCart(producto, quantity);
            // Reset quantity after adding
            setQuantities(prev => ({
                ...prev,
                [producto.codigo]: 0
            }));
        }
    };

    return (
        <div className="container my-4">
            <div className="card shadow-sm p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <h3 className="text-center mb-3" style={{ color: '#2E8B57' }}>
                    <i className="bi bi-search me-2"></i>
                    Buscador de Productos
                </h3>
                <InputGroup size="lg">
                    <InputGroup.Text style={{ backgroundColor: '#2E8B57', border: 'none' }}>
                        <i className="bi bi-search" style={{ color: 'white' }}></i>
                    </InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nombre, código o categoría..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ border: '2px solid #2E8B57' }}
                    />
                </InputGroup>

                {filteredProducts.length > 0 && (
                    <div className="mt-4">
                        <h5 className="mb-3">Resultados de búsqueda: {filteredProducts.length} producto(s)</h5>
                        <Row className="g-3">
                            {filteredProducts.map((producto) => (
                                <Col key={producto.codigo} lg={4} md={6} sm={12}>
                                    <Card className="h-100 shadow-sm" style={{ transition: 'transform 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                        <div className="position-relative">
                                            <Card.Img
                                                variant="top"
                                                src={producto.imagen}
                                                alt={producto.nombre}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />
                                            <Badge
                                                bg="success"
                                                className="position-absolute top-0 start-0 m-2"
                                            >
                                                {producto.codigo}
                                            </Badge>
                                            <Badge
                                                bg="info"
                                                className="position-absolute top-0 end-0 m-2"
                                            >
                                                {producto.stock} {producto.unidad} disponibles
                                            </Badge>
                                        </div>
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title style={{ color: '#2E8B57', fontSize: '1.2rem' }}>
                                                {producto.nombre}
                                            </Card.Title>
                                            <Badge bg="secondary" className="mb-2 align-self-start">
                                                {producto.categoria}
                                            </Badge>
                                            <Card.Text className="text-muted small flex-grow-1">
                                                {producto.descripcion.substring(0, 100)}...
                                            </Card.Text>
                                            <div className="mt-auto">
                                                <h5 className="text-success mb-3">
                                                    ${producto.precio.toLocaleString('es-CL')} CLP/{producto.unidad}
                                                </h5>
                                                <InputGroup className="mb-2" size="sm">
                                                    <InputGroup.Text>Cantidad</InputGroup.Text>
                                                    <Form.Control
                                                        type="number"
                                                        min="0"
                                                        max={producto.stock}
                                                        value={quantities[producto.codigo] || 0}
                                                        onChange={(e) => handleQuantityChange(producto.codigo, e.target.value)}
                                                        placeholder="0"
                                                    />
                                                    <InputGroup.Text>{producto.unidad}</InputGroup.Text>
                                                </InputGroup>
                                                <Button
                                                    variant="success"
                                                    className="w-100"
                                                    onClick={() => handleAddToCart(producto)}
                                                    disabled={!quantities[producto.codigo] || quantities[producto.codigo] <= 0 || quantities[producto.codigo] > producto.stock}
                                                >
                                                    <i className="bi bi-cart-plus me-2"></i>
                                                    Agregar al Carrito
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}

                {searchTerm && filteredProducts.length === 0 && (
                    <div className="text-center mt-4">
                        <i className="bi bi-emoji-frown" style={{ fontSize: '3rem', color: '#6c757d' }}></i>
                        <p className="text-muted mt-2">No se encontraron productos con "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BuscadorProductos;
