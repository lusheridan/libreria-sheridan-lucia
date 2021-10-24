import React from "react";
import { Item } from "../Item/Item";
import { Alert } from "react-bootstrap";

export const ItemList = ({ products = [] }) => {
  return (
    <div className="container">
      <div className="row">
        {products.length > 0 ? (
          products.map((item) => <Item {...item} />)
        ) : (
          <Alert variant="warning">No se encontraron productos</Alert>
        )}
      </div>
    </div>
  );
};
