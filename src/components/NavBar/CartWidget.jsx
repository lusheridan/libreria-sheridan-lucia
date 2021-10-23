import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContex';

export const CartWidget = () => {
    const {totalAmount, totalCount} = useContext(CartContext)

    return (
        <>
        <span>(${totalAmount()})</span>
        <span><FaShoppingCart size="2em"/></span>
        </>
    )
}