/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isInCarItems } from "../utils";
import { addItem, removeItem } from "../store/cartReducer";
import "../assets/index.css";
import Navbar from './Navbar'

export default function SingleProduct() {
    const { id } = useParams();
    const { productos, cartItems } = useSelector((state) => state);
    const [producto] = productos.filter((x) => Number(x.id) === Number(id));
    const dispatch = useDispatch();
    const isInCar = isInCarItems(cartItems, Number(id));

    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const mayus = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    const handleAdd = () => {
        dispatch(addItem({ id: Number(id) }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: Number(id) }));
    };
    return (
        <div >
        <Navbar />
       <br/>
       <Link
                    to="/"
                    className="goback"
                    style={{ textDecoration: "none" }}
                >
                    <svg
                        class="svg-icon"
                        viewBox="0 0 20 20"
                        style={{
                            color: "black",
                            width: "25px",
                            paddingTop: "5px",
                        }}
                    >
                        <path
                            fill="none"
                            d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
                            L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
                            c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
                            c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
                            S18.707,9.212,18.271,9.212z"
                        ></path>
                    </svg>
                </Link>
        <div className="single-container">
            <div className="row">
                <div className="col-md-5">
                    <div
                        className="carousel slide"
                        data-ride="carousel"
                        id="carousel-1"
                    >
                        <div  role="listbox">
                            <div className="carousel-item-img active">
                                <img
                                    className="img-thumbnail"
                                    src={producto.imageUrl}
                                    alt={mayus(producto.title)}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <h2>{mayus(producto.title)}</h2>
                    <h4 style={{color: "gray"}}>{mayus(producto.marca)}</h4>
                    <div className="price">
                        <span className="mr-2">
                            <i className="fa fa-rupee text-success"></i>
                            {formatter.format(producto.price)}
                        </span>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="icons mr-2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <span>1200 ratings &amp; 564 reviews</span>
                    </div>
                    <div className="d-flex align-items-center mt-4 offers mb-1">
                        <i className="fa fa-check-square-o mt-1"></i>
                        <span className="ml-1 font-weight-bold">
                            Descripción:{" "}
                        </span>
                        <span className="ml-1">
                            <br />
                        </span>
                    </div>
                    <div className="d-flex align-items-center offers mb-1">
                        <i className="fa fa-check-square-o mt-1"></i>
                        <span className="ml-1 font-weight-bold"></span>
                        <div>
                            {producto.description}
                            <br />
                            <br />
                            CÓMO COMPRAR EN NUESTRA TIENDA OFICIAL:
                            <br />
                            1. Selecciona el producto que deseas adquirir y haz Click en Añadir al carrito.
                            <br />
                            2. Gestiona el Envío: carga la dirección completa del domicilio donde quieres recibir tu compra.
                            <br />
                            3. Elige la forma de pago: contamos con todos los métodos de pago.
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-5 delivery">
                        <button
                            type="button"
                            className="button cart_button_clear"
                            onClick={isInCar ? handleRemove : handleAdd}
                        >
                            {isInCar
                                ? "Eliminar del carrito"
                                : "Añadir al carrito"}
                        </button>
                        <Link to="/">
                            <button
                                type="button"
                                className="button cart_button_clear"
                            >
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
        </div>
    );
}
