import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProducts } from "../../helpers/getProducts";
import { ItemDetails } from "../../components/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res.find((product) => product.id === Number(productId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : (
        <ItemDetails {...products} />
      )}
    </div>
  );
};
