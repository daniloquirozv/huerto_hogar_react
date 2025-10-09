import React from 'react'
import FooterComponent from '../components/FooterComponent'
import CarritoMainComponent from '../components/CarritoMainComponent'

function CarritoPage({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  return (
    <>
      <CarritoMainComponent 
        cartItems={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveItem}
        onClearCart={onClearCart}
      />
      <FooterComponent />
    </>
  )
}

export default CarritoPage