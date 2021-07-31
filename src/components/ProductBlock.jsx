import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { isInCarItems } from "../utils";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartReducer";

export default function ProductBlock({ producto }) {
  const { cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isInCar = isInCarItems(cartItems, producto.id);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const mayus = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleAdd = () => {
    dispatch(addItem({ id: producto.id }));
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: producto.id }));
  };

  const handleFav = () => {
    axios
      .post(`/api/products?productId=${producto.id}`)
      .then((res) => res.data);
    console.log("Fav: ", producto);
  };

  return (
    <div className="product-block">
      <Card style={{ width: "18rem" }}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/products/${producto.id}`}
        >
          <Card.Img
            className="card-img"
            variant="top"
            src={`${producto.imageUrl}`}
          />
          <br />
          <br />
          <Card.Title className="card-title">{mayus(producto.title)}</Card.Title>
          <Card.Text className="card-title">{mayus(producto.marca)}</Card.Text>
        </Link>
        <h3 className="price">{formatter.format(producto.price)}</h3>
        <div className="block-btns">
          <Button
            className="buy-btn"
            variant="primary"
            onClick={isInCar ? handleRemove : handleAdd}
          >
            {isInCar ? "Eliminar del carrito" : "Añadir al carrito"}
          </Button>
          <button type="submit" className="fav-btn" onClick={handleFav}>
            ♡
          </button>
        </div>
      </Card>
    </div>
  );
}
