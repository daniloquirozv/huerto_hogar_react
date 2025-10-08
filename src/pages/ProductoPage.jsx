import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import CardsComponent from '../components/CardsComponent'
import Header from '../components/Header'

function ProductoPage() {
  return (
    <>
        {/* <HeaderComponent></HeaderComponent>         */}
        <Header></Header>
        <CardsComponent></CardsComponent>
        <FooterComponent></FooterComponent>
    </>
  )
}

export default ProductoPage