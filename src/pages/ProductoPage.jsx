import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import CardsComponent from '../components/CardsComponent'
import BuscadorProductos from '../components/BuscadorProductos'
import Header from '../components/Header'

function ProductoPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (producto, cantidad) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.codigo === producto.codigo);
      
      if (existingItemIndex !== -1) {
        // Update quantity if product exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].cantidad += cantidad;
        return updatedItems;
      } else {
        // Add new product to cart
        return [...prevItems, {
          codigo: producto.codigo,
          nombre: producto.nombre,
          precio: producto.precio,
          unidad: producto.unidad,
          cantidad: cantidad,
          imagen: producto.imagen
        }];
      }
    });
  };

  const handleRemoveFromCart = (codigo) => {
    setCartItems(prevItems => prevItems.filter(item => item.codigo !== codigo));
  };

  const handleUpdateQuantity = (codigo, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(codigo);
    } else {
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.codigo === codigo ? { ...item, cantidad: newQuantity } : item
        )
      );
    }
  };

  return (
    <>
        {/* <HeaderComponent></HeaderComponent>         */}
        <Header 
          carritoItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        ></Header>
        <BuscadorProductos onAddToCart={handleAddToCart}></BuscadorProductos>
        <CardsComponent onAddToCart={handleAddToCart}></CardsComponent>
        <FooterComponent></FooterComponent>
    </>
  )
}

export default ProductoPage