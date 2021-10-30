import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetails } from "../../components/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
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
