import React, { useState, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContex";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetails = ({ id, name, price, img, description, stock }) => {
  const [count, setCount] = useState(0);
  const { addToCart, isInCart, removeItem } = useContext(CartContext);
  const product = { id, name, price, img, description };
  const addItem = () => {
    addToCart(product, count);
  };
  const removeFromCart = () => {
    removeItem(id);
  };
  return (
    <>
      <Container>
        <div>
          <h2>{name}</h2>
          <img src={`/${img}`} alt={name} />
          <p>{description}</p>
          <h4>Precio: ${price}</h4>
        </div>
        {isInCart(id) ? (
          <>
            <Link to={"/cart"}>
              <Button variant="dark">Terminar Compra</Button>
            </Link>
            <br />
            <br />
            <Button variant="dark" onClick={removeFromCart}>
              Quitar Producto
            </Button>
          </>
        ) : (
          <>
            <h4>Cantidad: {count}</h4>
            <ItemCount count={count} modify={setCount} max={stock} />
            <br />
            <span>
              <Button variant="dark" onClick={addItem} disabled={count === 0}>
                Comprar
              </Button>{" "}
              <Link to={"/"}>
                <Button variant="dark">Volver</Button>
              </Link>
            </span>
          </>
        )}
      </Container>
    </>
  );
};
