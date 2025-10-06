import React from 'react'
import '../assets/styles/producto-styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function FooterComponent() {
  return (
    <footer className="footer-eco">
      <div className="container-fluid py-4">
        <div className="row gy-4 align-items-center">

          <div className="col-lg-4 col-md-6 text-start">
            <h5 className="eco-title mb-3">Tiendas físicas y horarios</h5>
            <ul className="list-unstyled footer-list mb-2">
              <li><b>Santiago:</b> Salomón Sumal 3420, San Joaquín. <br /> Tel: +56 987654321</li>
              <li><b>Viña del Mar:</b> Calle Valparaíso 463, Local 128, Galería Cristal. <br /> Tel: +56 987654321</li>
              <li><b>Valparaíso:</b> Pedro Montt 2502, Valparaíso. <br /> Tel: +56 987654321</li>
              <li><b>Villarica:</b> Camilo Henríquez 544 <br /> Tel: +56 987654321</li>
              <li><b>Nacimiento:</b> San Martín 443 <br /> Tel: +56 987654321</li>
              <li><b>Puerto Montt:</b> Calle Antihual 965 <br /> Tel: +56 987654321</li>
              <li><b>Concepción:</b> Freire 1049 <br /> Tel: +56 987654321</li>
            </ul>
            <p className="mb-0"><b>Horarios:</b> Lunes a viernes 09:00 - 19:30 / Sábados 09:00 - 14:00</p>
          </div>

          <div className="col-lg-4 col-md-6 text-center">
            <h5 className="eco-title mb-3">Encuéntranos</h5>
            <div className="footer-mapa rounded-4 overflow-hidden shadow-sm mb-2">
              <div className="ratio ratio-16x9">
                <iframe
                  title="Ubicación de Huerto Hogar en Google Maps"
                  className="ratio ratio-16x9"
                  src="https://www.google.com/maps?q=Salomón+Sumal+3420,+San+Joaquín&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>

          <div id="contacto" className="col-lg-4 text-center">
            <h5 className="eco-title mb-3">Contáctanos</h5>
            <div className="footer-social mb-3">
              <a href="https://facebook.com/" title="Facebook" target="_blank" rel="noreferrer" className="social-link"><i
                className="bi bi-facebook"></i></a>
              <a href="https://instagram.com/" title="Instagram" target="_blank" rel="noreferrer" className="social-link"><i
                className="bi bi-instagram"></i></a>
              <a href="https://wa.me/56912345678" title="Whatsapp" target="_blank" rel="noreferrer" className="social-link"><i
                className="bi bi-whatsapp"></i></a>
              <a href="mailto:contacto@huertohogar.cl" title="Correo" className="social-link"><i
                className="bi bi-envelope-fill"></i></a>
            </div>
            <div className="small mt-3 text-white-50">
              <div>© 2024 Huerto Hogar</div>
              <div>Todos los derechos reservados.</div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default FooterComponent