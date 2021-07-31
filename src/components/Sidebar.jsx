/** @format */
import * as React from "react";
import { useDispatch } from "react-redux";
import { setProductos } from "../store/productos";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import "../assets/index.css";

export default function Sidebar() {

    const dispatch = useDispatch();
    
    const handleFilter = (categoryId) => {
        let productArr = []
         axios
            .get(`/api/categories?categoryId=${categoryId}`)
            .then((res) => res.data)
            .then((data) => { Promise.all(data.map(arrData => 
                axios.get(`/api/products/${arrData.productId}`)
                .then((datas) => productArr.push(datas.data))))
                .then(() => {
                    // productArr.shift()
                    dispatch(setProductos(productArr))
                })})
                // .then(() => console.log(productArr))
    };

    return (
        <div className="sideBar">
            <ListGroup defaultActiveKey="">
                <ListGroup.Item className="categories">
                    <h5>Categorías</h5>
                </ListGroup.Item>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(1)}
                >
                    PCs completas
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(2)}
                >
                    Laptops
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(3)}
                >
                    Monitores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(4)}
                >
                    Teclados
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(5)}
                >
                    Mouses
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(6)}
                >
                    Procesadores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(7)}
                >
                    Mothers
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(8)}
                >
                    RAMs
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(9)}
                >
                    Fuentes
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(10)}
                >
                    Auriculares
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(11)}
                >
                    Cables y conectores
                </button>
                <button
                    className="categories-item"
                    onClick={() => handleFilter(12)}
                >
                    Impresoras
                </button>
            </ListGroup>
        </div>
    );
}
