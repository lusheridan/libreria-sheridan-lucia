import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState(init)
    
    const addToCart = (item, quantity) => {
      setCart( [...cart, { item, quantity }] )
    }
    
    const removeItem = (itemId) => {
      const newCart = cart.filter( (prod) => prod.item.id !== itemId)
      setCart( newCart )
    }
  
    const totalCount = () => {
      return cart.reduce( (acc, prod) => acc + prod.quantity, 0 )
    }

    const totalAmount = () => {
      return cart.reduce( (acc, prod) => acc + prod.quantity * prod.item.price, 0)
    }

    const isInCart = (itemId) => {
      return cart.some( (prod) => prod.item.id === itemId)
    }
  
    const clear = () => {
      setCart([])
    }
    
    useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
  
    return (
        <CartContext.Provider value={ {
            cart,
            addToCart,
            removeItem,
            totalCount,
            clear,
            isInCart,
            totalAmount
        }}>
            {children}
        </CartContext.Provider>
    )

}