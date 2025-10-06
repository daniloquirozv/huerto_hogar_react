import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import CardsComponent from '../components/CardsComponent'

function ProductoPage() {
  return (
    <>
        <HeaderComponent></HeaderComponent>
        <div>Producto Page</div>
        <CardsComponent></CardsComponent>
        <FooterComponent></FooterComponent>
    </>
  )
}

export default ProductoPage