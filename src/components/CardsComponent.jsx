import React from 'react'
import '../assets/styles/producto-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Importar imágenes
import manzanasImg from '../assets/images/Productos/Manzanas-Fuji.png'
import naranjasImg from '../assets/images/Productos/Naranjas-valencia.png'
import platanosImg from '../assets/images/Productos/Platanos-cavendish.png'
import zanahoriasImg from '../assets/images/Productos/Zanahorias-organicas.png'
import espinacasImg from '../assets/images/Productos/Espinacas-frescas.png'
import pimientosImg from '../assets/images/Productos/Pimientos-tricolores.png'
import mielImg from '../assets/images/Productos/Miel-organica.png'
import quinoaImg from '../assets/images/Productos/Quinoa-organica.png'
import yogurtImg from '../assets/images/Productos/Yogurt-natural.png'
import lecheImg from '../assets/images/Productos/Leche-natural.png'

function CardsComponent() {
    return (

        <div className="container my-5">
            <section className="category-section">
                <div className="card">
                    <h2 className="category-title">Frutas Frescas</h2>
                    <p className="category-description">
                        Nuestra selección de frutas frescas ofrece una experiencia directa del campo a
                        tu hogar. Estas frutas se cultivan y cosechan en el punto óptimo de madurez para asegurar
                        su sabor y frescura. Disfruta de una variedad de frutas de temporada que aportan vitaminas
                        y nutrientes esenciales a tu dieta diaria. Perfectas para consumir solas, en ensaladas o como
                        ingrediente principal en postres y smoothies.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={manzanasImg} className="card-img-top" alt="Manzanas Fuji" />
                                <span className="product-code">FR001</span>
                                <span className="stock-badge">150 kg disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Manzanas Fuji</h5>
                                <div className="product-price">$1.200 CLP/kg</div>
                                <p className="product-stock"> En stock - 150 kilos</p>
                                <p className="product-description">
                                    Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule.
                                    Perfectas para meriendas saludables o como ingrediente en postres.
                                    estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={naranjasImg} className="card-img-top" alt="Naranjas Valencia" />
                                <span className="product-code">FR002</span>
                                <span className="stock-badge">200 kg disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Naranjas Valencia</h5>
                                <div className="product-price">$1.000 CLP/kg</div>
                                <p className="product-stock"> En stock - 200 kilos</p>
                                <p className="product-description">
                                    Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para
                                    zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su
                                    dulzura y jugosidad.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={platanosImg} className="card-img-top" alt="Plátanos Cavendish" />
                                <span className="product-code">FR003</span>
                                <span className="stock-badge">250 kg disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Plátanos Cavendish</h5>
                                <div className="product-price">$800 CLP/kg</div>
                                <p className="product-stock"> En stock - 250 kilos</p>
                                <p className="product-description">
                                    Plátanos maduros y dulces, perfectos para el desayuno o como snack energético.
                                    Ricos en potasio y vitaminas, ideales para mantener una dieta equelibrada.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="card">
                    <h2 className="category-title">Verduras</h2>
                    <p className="category-description">
                        Nuestra selección de frutas frescas ofrece una experiencia directa del campo a
                        tu hogar. Estas frutas se cultivan y cosechan en el punto óptimo de madurez para asegurar
                        su sabor y frescura. Disfruta de una variedad de frutas de temporada que aportan vitaminas
                        y nutrientes esenciales a tu dieta diaria. Perfectas para consumir solas, en ensaladas o como
                        ingrediente principal en postres y smoothies.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={zanahoriasImg} className="card-img-top" alt="Zanahorias organicas" />
                                <span className="product-code">VR001</span>
                                <span className="stock-badge">100 kg disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Zanahorias organicas</h5>
                                <div className="product-price">$900 CLP/kg</div>
                                <p className="product-stock"> En stock - 100 kilos</p>
                                <p className="product-description">
                                    Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins.
                                    Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack
                                    saludable.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={espinacasImg} className="card-img-top" alt="Espinacas frescas" />
                                <span className="product-code">VR002</span>
                                <span className="stock-badge">80 bolsas disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Espinacas Frescas</h5>
                                <div className="product-price">$700 CLP/bolsa </div>
                                <p className="product-stock"> En stock - 80 bolsas</p>
                                <p className="product-description">
                                    Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes.
                                    estas espinacas son cultivadas bajo practicas organicas que garantizan su calidad y valor nutricional
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={pimientosImg} className="card-img-top" alt="Pimientos tricolores" />
                                <span className="product-code">VR003</span>
                                <span className="stock-badge">120 kg disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Pimientos tricolores</h5>
                                <div className="product-price">$1.500 CLP/kg</div>
                                <p className="product-stock"> En stock - 120 kilos</p>
                                <p className="product-description">
                                    Pimientos rojos, amarillos y verdes, ideales para salteados y platos
                                    coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante
                                    y saludable a cualquier receta.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="card">
                    <h2 className="category-title">Productos organicos</h2>
                    <p className="category-description">
                        Nuestros productos orgánicos están elaborados con ingredientes naturales y
                        procesados de manera responsable para mantener sus beneficios saludables. Desde aceites
                        y miel hasta granos y semillas, ofrecemos una selección que apoya un estilo de vida
                        saludable y respetuoso con el medio ambiente
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={mielImg} className="card-img-top" alt="Miel organica" />
                                <span className="product-code">PO001</span>
                                <span className="stock-badge">50 frascos disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Miel Organica</h5>
                                <div className="product-price">$5.000 CLP por frasco de 500g</div>
                                <p className="product-stock"> En stock - 50 frascos</p>
                                <p className="product-description">
                                    Miel pura y orgánica producida por apicultores locales. Rica en
                                    antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus
                                    comidas y bebidas.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={quinoaImg} className="card-img-top" alt="Quinoa organica" />
                                <span className="product-code">PO002</span>
                                <span className="stock-badge">100 paquetes disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Quinoa organica</h5>
                                <div className="product-price">$4.500 CLP por paquete de 500g </div>
                                <p className="product-stock"> En stock - 100 paquetes</p>
                                <p className="product-description">
                                    Quinoa orgánica, natural y libre de químicos, rica en proteínas y fibra.
                                    Ideal para una alimentación saludable y nutritiva, perfecta para toda la familia.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="card">
                    <h2 className="category-title">Productos lacteos</h2>
                    <p className="category-description">
                        Los productos lácteos de HuertoHogar provienen de granjas locales que se
                        dedican a la producción responsable y de calidad. Ofrecemos una gama de leches, yogures
                        y otros derivados que conservan su frescura y sabor auténtico. Ricos en calcio y nutrientes
                        esenciales, nuestros lácteos son perfectos para complementar una dieta equilibrada,
                        proporcionando el mejor sabor y nutrición para toda la familia.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={yogurtImg} className="card-img-top" alt="Yogurt natural" />
                                <span className="product-code">PO001</span>
                                <span className="stock-badge">80 frascos disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Yogurt natural</h5>
                                <div className="product-price">$2.000 CLP por frasco de 250g</div>
                                <p className="product-stock"> En stock - 80 frascos</p>
                                <p className="product-description">
                                    Yogurt natural elaborado con leche fresca de granjas locales, fermentado con cultivos
                                    lácticos que le confieren su textura cremosa y sabor auténtico.
                                    Rico en probióticos, calcio y nutrientes esenciales
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card product-card">
                            <div className="position-relative">
                                <img src={lecheImg} className="card-img-top" alt="Leche natural" />
                                <span className="product-code">PL002</span>
                                <span className="stock-badge">100 Frascos disponibles</span>
                            </div>
                            <div className="card-body">
                                <h5 className="product-title">Leche fresca</h5>
                                <div className="product-price">$3.800 CLP por frasco de 1LT </div>
                                <p className="product-stock"> En stock - 100 frascos</p>
                                <p className="product-description">
                                    Leche fresca de granjas en la Región de O'Higgins, ricas en calcio y nutrientes.
                                    Con sabor auténtico y natural, perfectos para disfrutar en
                                    cualquier momento y cuidar a tu familia.
                                </p>
                                <button className="btn btn-success btn-add-cart">
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardsComponent