import React from 'react'
import FooterComponent from '../components/FooterComponent'
import CardsComponent from '../components/CardsComponent'
import BuscadorProductos from '../components/BuscadorProductos'
import Header from '../components/Header'

function ProductoPage({ onAddToCart, cartItems }) {
  return (
    <>  
        <Header 
          carritoItems={cartItems}
        />
        <BuscadorProductos onAddToCart={onAddToCart} />
        <CardsComponent onAddToCart={onAddToCart} />
        <FooterComponent />
    </>
  )
}

export default ProductoPage