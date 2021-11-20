import React, { useState, useContext } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { CartContext } from "../../context/CartContex";
import { Cart } from "../Cart/Cart";
import { getFirestore } from "../../firebase/config";
import firebase from "firebase";
import "firebase/firestore";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export const Checkout = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const { cart, totalAmount, clear } = useContext(CartContext);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });

    if (["emailConfirm", "email"].includes(e.target.id)) {
      setInvalidEmail(values.email === values.emailConfirm);
    }
  };

  const createOrder = (order) => {
    return new Promise(async (resolve, reject) => {
      const db = getFirestore();
      const orders = db.collection("orders");
      const itemsToUpdate = db.collection("products").where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        cart.map((el) => el.item.id)
      );

      const query = await itemsToUpdate.get();
      const batch = db.batch();

      const outOfStock = [];

      query.docs.forEach((doc) => {
        const itemInCart = cart.find((prod) => prod.item.id === doc.id);

        if (doc.data().stock >= itemInCart.quantity) {
          batch.update(doc.ref, {
            stock: doc.data().stock - itemInCart.quantity,
          });
        } else {
          outOfStock.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        orders.add(order).then((res) => {
          batch.commit();
          resolve(res.id);
        });
      } else {
        reject(outOfStock);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: values,
      items: cart.map((el) => ({
        id: el.item.id,
        price: el.item.price,
        quantity: el.quantity,
      })),
      total: totalAmount(),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    createOrder(order)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Orden registrada",
          text: `Este es su código de órden: ${res}. Nos pondremos en contacto con usted a la brevedad a ${values.email}`,
          willClose: () => {
            clear();
            history.push("/");
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Producto fuera de existencia",
          text: `No hay stock disponible de de: ${err
            .map((el) => el.name)
            .join(", ")}`,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Cart isCheckout={true} />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h2>Completa tus datos:</h2>
          <Form.Group
            className="mb-3"
            controlId="name"
            value={values.name}
            onChange={handleInputChange}
          >
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingresa tu nombre"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="surname"
            value={values.surname}
            onChange={handleInputChange}
          >
            <Form.Label>Apellido:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingresa tu apellido"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="phone"
            value={values.phone}
            onChange={handleInputChange}
          >
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingresa tu teléfono"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="email"
            value={values.email}
            onChange={handleInputChange}
          >
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="emailConfirm"
            value={values.emailConfirm}
            onChange={handleInputChange}
          >
            <Form.Label>Comprobar e-mail:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Volve a ingresa tu correo electrónico"
            />
          </Form.Group>
          {invalidEmail && (
            <Alert variant="warning">Los emails ingresados no coinciden</Alert>
          )}
          <Button
            variant="dark"
            type="submit"
            disabled={loading || invalidEmail}
          >
            Confirmar Compra
          </Button>
        </Form>
      </Container>
    </>
  );
};
