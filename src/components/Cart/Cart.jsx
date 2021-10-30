import React, { useContext } from "react";
import { Table, Button, Alert, Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export const Cart = () => {
  const { cart, removeItem, totalAmount, clear } = useContext(CartContext);
  const renderProduct = (element, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{element.item.name}</td>
        <td>{`$${element.item.price}`}</td>
        <td>{element.quantity}</td>
        <td>
          <Button variant="danger" onClick={() => removeItem(element.item.id)}>
            <FaTrashAlt />
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <>
      {cart.length > 0 ? (
        <Container>
          <h2>Resumen de compra</h2>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element, index) => renderProduct(element, index))}
            </tbody>
          </Table>
          <h3 className="my-3">Precio total: ${totalAmount()}</h3>
          <button className="btn btn-danger" onClick={clear}>
            Vaciar Carrito
          </button>

          <Link to="/checkout" className="btn btn-success mx-3">
            Terminar mi compra
          </Link>
        </Container>
      ) : (
        <Alert variant="warning">No se encontraron productos</Alert>
      )}
      <Container>
        <Link to={"/"}>
          <Button variant="dark">Volver</Button>
        </Link>
      </Container>
    </>
  );
};
