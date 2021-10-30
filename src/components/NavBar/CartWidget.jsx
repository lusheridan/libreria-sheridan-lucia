import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { Container } from "react-bootstrap";

export const CartWidget = () => {
  const { totalAmount, totalCount } = useContext(CartContext);

  return (
    <>
      {totalCount() > 0 ? (
        <Container>
          <>
            <span>(Productos: {totalCount()} </span>
            <span> - ${totalAmount()}</span>

            <span>
              <FaShoppingCart size="2em" />
            </span>
          </>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};
