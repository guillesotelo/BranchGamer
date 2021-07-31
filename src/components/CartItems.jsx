/** @format */
import React from "react";
import { capitalizeFirstLetter } from "../utils/index";
import "../assets/cart.css";
import { useDispatch } from "react-redux";
import { quantityAdd, quantityRemove, removeItem } from "../store/cartReducer";

export default function CartItems({ producto }) {
    const dispatch = useDispatch();

    const addOne = () => {
        dispatch(quantityAdd({ id: producto.id }));
    };
    const removeOne = () => {
        dispatch(quantityRemove({ id: producto.id }));
    };

    const handleRemove = () => {
        dispatch(removeItem({ id: producto.id }));
    };
    return (
        <li className="cartItem">
            <div className="cartItemImage">
                <img src={producto.imageUrl} alt={producto.title} />
            </div>
            <div className="cartItemName">
                <div className="cart_item_text">
                    {capitalizeFirstLetter(producto.title)}
                </div>
            </div>
            <div className="cartItemQuantity">
                <button
                    onClick={() => {
                        Number(producto.quantity) !== 1
                            ? removeOne()
                            : handleRemove();
                    }}
                >
                    <img
                        src="https://img.icons8.com/android/24/000000/minus.png"
                        alt="-"
                    />
                </button>
                <div className="cart_item_text">{producto.quantity}</div>
                <button onClick={addOne}>
                    <img
                        src="https://img.icons8.com/android/24/000000/plus.png"
                        alt="+"
                    />
                </button>
            </div>
            <div className="cartItemPrice">
                <div className="cart_item_text">${producto.price}</div>
            </div>
            <div className="cartItemTotalPrice">
                <div className="cart_item_text">
                    ${producto.quantity * producto.price}
                </div>
            </div>
            <svg
                className="svg-icon"
                viewBox="0 0 20 20"
                onClick={handleRemove}
            >
                <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
            </svg>
        </li>
    );
}
