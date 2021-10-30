import React, { useState, useEffect } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getFirestore } from "../../firebase/config";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const productos = categoryId
      ? db.collection("products").where("category", "==", categoryId)
      : db.collection("products");

    productos
      .get()
      .then((response) => {
        const newItems = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setProducts(newItems);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, setLoading]);

  return (
    <div>
      <div>
        <section className="container my-5">
          <h2>Productos</h2>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status"></Spinner>
            </div>
          ) : (
            <ItemList products={products} />
          )}
        </section>
      </div>
    </div>
  );
};
