import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetails } from "../../components/ItemDetail/ItemDetail";
import { Alert, Spinner, Container } from "react-bootstrap";
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const products = db.collection("products");
    const item = products.doc(productId);

    item
      .get()
      .then((doc) => {
        setProducts({
          id: doc.id,
          ...doc.data(),
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : products.name ? (
        <ItemDetails {...products} />
      ) : (
        <Alert variant="warning">El producto no existe</Alert>
      )}
    </Container>
  );
};
