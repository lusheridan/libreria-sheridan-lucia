import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <hr/>
            <h2 className="greeting">{greeting}</h2> 
        </div>
    )
}