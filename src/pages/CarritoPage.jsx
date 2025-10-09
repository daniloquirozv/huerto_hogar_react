import React from 'react'
import FooterComponent from '../components/FooterComponent'
import CarritoMainComponent from '../components/CarritoMainComponent'
import Header from '../components/Header'

function CarritoPage({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  return (
    <>
    <Header/>
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