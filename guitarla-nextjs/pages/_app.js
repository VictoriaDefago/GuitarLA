import { useState } from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const [shoppingCart, setShoppingCart] = useState([])

  const addShoppingCart = guitar => {
    if(shoppingCart.some( guitarState =>  guitarState.id === guitar.id )) {

      const updatedShoppingCart = shoppingCart.map( guitarState => {
        if( guitarState.id === guitar.id ) {
          guitarState.quantity = guitar.quantity;
        } 
        return guitarState;
      });

      setShoppingCart([...updatedShoppingCart]);
      localStorage.setItem('carrito', JSON.stringify( shoppingCart ));
      
    } else {
      setShoppingCart([...shoppingCart, guitar]);
      localStorage.setItem('carrito', JSON.stringify( shoppingCart ));
    }
  }

  const deleteProduct = id => {
    const updatedShoppingCart = shoppingCart.filter( product => product.id != id)
    setShoppingCart(updatedShoppingCart)
    window.localStorage.setItem('carrito', JSON.stringify( shoppingCart ));
  }

  const updateQuantity = guitar => {
    const updatedShoppingCart = shoppingCart.map( guitarState => {
      if(guitarState.id === guitar.id ) {
        guitarState.cantidad = parseInt( guitar.quantity )
      } 
      return guitarState
    })
    setShoppingCart(updatedShoppingCart)
    window.localStorage.setItem('carrito', JSON.stringify( shoppingCart ));
  }


  return <Component {...pageProps} 
    shoppingCart={shoppingCart}
    addShoppingCart={addShoppingCart}
    deleteProduct={deleteProduct}
    updateQuantity={updateQuantity}
  />

}
