export const blogPosts = [
    {
        id: 1,
        titulo: "¡OFERTA ESPECIAL! 30% OFF en Verduras Orgánicas",
        categoria: "Promociones",
        fecha: "2025-10-10",
        autor: "Equipo HuertoHogar",
        imagen: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
        resumen: "¡Aprovecha nuestra súper oferta en verduras orgánicas! Descuentos de hasta 30% en lechugas, tomates, zanahorias y más.",
        contenido: `
            <div class="promocion-destacada">
                <h3>🥬 ¡Verduras Frescas con 30% de Descuento! 🥕</h3>
                <p>Esta semana tenemos una promoción especial en nuestras verduras orgánicas más populares:</p>
                <ul>
                    <li><strong>Lechugas orgánicas:</strong> Antes $2.500 - Ahora $1.750</li>
                    <li><strong>Tomates cherry:</strong> Antes $3.200 - Ahora $2.240</li>
                    <li><strong>Zanahorias baby:</strong> Antes $1.800 - Ahora $1.260</li>
                    <li><strong>Espinacas frescas:</strong> Antes $2.000 - Ahora $1.400</li>
                </ul>
                <div class="cupon-descuento">
                    <h4>🎟️ Cupón: VERDURAS30</h4>
                    <p>Usa el código <strong>VERDURAS30</strong> al hacer tu pedido</p>
                    <small>*Válido hasta el 17 de Octubre de 2025</small>
                </div>
            </div>
        `,
        descuento: 30,
        codigoCupon: "VERDURAS30",
        fechaVencimiento: "2025-10-17",
        destacado: true
    },
    {
        id: 2,
        titulo: "Frutas de Temporada: Lo Mejor del Otoño 2025",
        categoria: "Consejos",
        fecha: "2025-10-08",
        autor: "María González",
        imagen: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&h=400&fit=crop",
        resumen: "Descubre las mejores frutas de otoño y cómo aprovechar al máximo sus beneficios nutricionales.",
        contenido: `
            <h3>🍎 Las Mejores Frutas de Otoño</h3>
            <p>El otoño nos trae una variedad increíble de frutas llenas de vitaminas y antioxidantes:</p>
            <h4>Frutas Destacadas:</h4>
            <ul>
                <li><strong>Manzanas:</strong> Ricas en fibra y vitamina C</li>
                <li><strong>Peras:</strong> Excelente fuente de potasio</li>
                <li><strong>Granadas:</strong> Llenas de antioxidantes</li>
                <li><strong>Caquis:</strong> Alto contenido en vitamina A</li>
            </ul>
            <div class="oferta-especial">
                <h4>🍓 Oferta Especial de la Semana</h4>
                <p><strong>20% OFF en frutas de temporada</strong> - Código: <code>OTOÑO20</code></p>
            </div>
        `,
        descuento: 20,
        codigoCupon: "OTOÑO20",
        fechaVencimiento: "2025-10-15",
        destacado: false
    },
    {
        id: 3,
        titulo: "Cómo Crear tu Huerto Urbano en Casa",
        categoria: "Tutoriales",
        fecha: "2025-10-05",
        autor: "Carlos Martínez",
        imagen: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop",
        resumen: "Guía completa para principiantes que quieren empezar su propio huerto urbano en espacios pequeños.",
        contenido: `
            <h3>🌱 Tu Primer Huerto Urbano</h3>
            <p>Crear un huerto en casa es más fácil de lo que piensas. Te guiamos paso a paso:</p>
            <h4>Paso 1: Elige el Lugar Adecuado</h4>
            <ul>
                <li>Mínimo 6 horas de sol directo</li>
                <li>Acceso fácil al agua</li>
                <li>Protegido del viento fuerte</li>
            </ul>
            <h4>Paso 2: Selecciona tus Plantas</h4>
            <p>Para principiantes recomendamos: lechugas, rabanitos, hierbas aromáticas.</p>
            <div class="promocion-kits">
                <h4>🎁 Kit de Inicio Huerto Urbano</h4>
                <p><strong>¡25% OFF en tu primer kit!</strong> Incluye semillas, macetas y tierra orgánica.</p>
                <p>Código: <code>MIHUERTO25</code></p>
            </div>
        `,
        descuento: 25,
        codigoCupon: "MIHUERTO25",
        fechaVencimiento: "2025-10-20",
        destacado: false
    },
    {
        id: 4,
        titulo: "¡FLASH SALE! 50% OFF en Hierbas Aromáticas",
        categoria: "Promociones",
        fecha: "2025-10-09",
        autor: "Equipo HuertoHogar",
        imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
        resumen: "¡Solo por 48 horas! Increíble descuento en todas nuestras hierbas aromáticas frescas.",
        contenido: `
            <div class="flash-sale">
                <h3>⚡ FLASH SALE - ¡Solo 48 Horas! ⚡</h3>
                <p class="urgencia">¡Hurry! Esta oferta termina pronto</p>
                <h4>🌿 50% OFF en Hierbas Aromáticas</h4>
                <ul>
                    <li><strong>Albahaca fresca:</strong> $1.500 → $750</li>
                    <li><strong>Cilantro orgánico:</strong> $1.200 → $600</li>
                    <li><strong>Perejil rizado:</strong> $1.000 → $500</li>
                    <li><strong>Menta especiada:</strong> $1.800 → $900</li>
                </ul>
                <div class="countdown">
                    <h4>⏰ ¡Tiempo Limitado!</h4>
                    <p>Esta oferta vence el <strong>11 de Octubre a las 23:59</strong></p>
                </div>
                <div class="cupon-flash">
                    <h4>🏃‍♀️ Código Express: FLASH50</h4>
                    <p>Aplica automáticamente en el carrito</p>
                </div>
            </div>
        `,
        descuento: 50,
        codigoCupon: "FLASH50",
        fechaVencimiento: "2025-10-11",
        destacado: true,
        urgente: true
    },
    {
        id: 5,
        titulo: "Beneficios de los Alimentos Orgánicos",
        categoria: "Salud",
        fecha: "2025-10-03",
        autor: "Dra. Ana Silva",
        imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop",
        resumen: "Conoce por qué elegir alimentos orgánicos es una inversión en tu salud y en el medio ambiente.",
        contenido: `
            <h3>🌿 ¿Por Qué Elegir Orgánico?</h3>
            <p>Los alimentos orgánicos ofrecen múltiples beneficios para tu salud:</p>
            <h4>Beneficios para la Salud:</h4>
            <ul>
                <li>Libre de pesticidas químicos</li>
                <li>Mayor contenido nutricional</li>
                <li>Mejor sabor y frescura</li>
                <li>Sin organismos genéticamente modificados</li>
            </ul>
            <h4>Beneficios Ambientales:</h4>
            <ul>
                <li>Agricultura sostenible</li>
                <li>Protección de la biodiversidad</li>
                <li>Reducción de contaminación</li>
            </ul>
            <div class="promo-organicos">
                <h4>🌱 Prueba Orgánico por Menos</h4>
                <p><strong>15% OFF en tu primera compra orgánica</strong></p>
                <p>Código: <code>ORGANICO15</code></p>
            </div>
        `,
        descuento: 15,
        codigoCupon: "ORGANICO15",
        fechaVencimiento: "2025-10-25",
        destacado: false
    }
];

export const categoriasBlogs = [
    { nombre: "Todas", valor: "todas" },
    { nombre: "Promociones", valor: "Promociones" },
    { nombre: "Consejos", valor: "Consejos" },
    { nombre: "Tutoriales", valor: "Tutoriales" },
    { nombre: "Salud", valor: "Salud" }
];

export const promocionesActivas = blogPosts.filter(post => 
    post.descuento && new Date(post.fechaVencimiento) > new Date()
);