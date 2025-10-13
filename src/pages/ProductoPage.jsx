import React from 'react'
import FooterComponent from '../components/FooterComponent'
import CardsComponent from '../components/CardsComponent'
import BuscadorProductos from '../components/BuscadorProductos'
import Header from '../components/Header'

function ProductoPage({ onAddToCart, cartItems, onUpdateQuantity, onRemoveItem }) {
  return (
    <>
      <Header
        carritoItems={cartItems}
        onRemoveFromCart={onRemoveItem}
        onUpdateQuantity={onUpdateQuantity}
      />
      <BuscadorProductos onAddToCart={onAddToCart} />
      <CardsComponent onAddToCart={onAddToCart} />
      <FooterComponent />
    </>
  )
}

export default ProductoPage