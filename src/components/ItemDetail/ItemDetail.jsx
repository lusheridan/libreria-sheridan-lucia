import React from 'react';
import { Container } from 'react-bootstrap';

export const ItemDetails = ({id, name, price, img, description}) => {
    
    return (
        <>
        <Container>
        <div>
            <h2>{name}</h2>
            <img src={`/${img}`} alt={name}/>
            <p>{description}</p>
            <h4>Precio: ${price}</h4>
        </div>
        </Container>
        </>
    )
}