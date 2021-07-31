import React, {useEffect, useState} from 'react'
import {Table, Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setProductos } from "../../store/productos";
import { modificarProducto } from "../../store/productos"
import axios from "axios"



const ModificarProducto = () => {

    const productos = useSelector(state => state.productos)
    const dispatch = useDispatch()
    let item = useSelector((state) => state.item);
    const token = useSelector(state => state.token)
    const [inputProduct, setInputProduct] = useState({})
    const [rowSelected, setRowSelected] = useState()

    React.useEffect(() => {
        axios
            .get(`/api/products?item= `)
            .then((res) => res.data)
            .then((data) => {
                dispatch(setProductos(data));
            });
    }, [ dispatch]);

    const handleProduct = ({target}) => {
        setInputProduct(target.name)
        setInputProduct({...inputProduct, [target.name] : target.value})
    }

    const handleSend = (productId) =>{
        dispatch(modificarProducto({inputProduct, productId, token }))
        .then(()=>{
            setTimeout(() => document.getElementById(productId).style.backgroundColor = "#59aebb" , 500);
        })
    }

    const getId = (e) => {
        const row = e.nativeEvent.path[2].id
        document.getElementById(row).style.backgroundColor = "#e49b9b"
    }

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th className="modificar-producto-th">Id</th>
                        <th className="modificar-producto-th">Titulo</th>
                        <th className="modificar-producto-th">Marca</th>
                        <th className="modificar-producto-th">Precio</th>
                        <th className="modificar-producto-th">Descripcion</th>
                        <th className="modificar-producto-th">Cantidad</th>
                        <th className="modificar-producto-th">Imagen</th>
                        <th className="modificar-producto-th"></th>
                    </tr>
                </thead>
                <tbody>
                {productos.length ? productos.map(producto => {
                        return (
                            <tr className="modificar-producto-row" id={producto.id} key={producto.id} >
                                <td className="modificar-producto-td">
                                    <p>{producto.id}</p>
                                </td>

                                <td className="modificar-producto-td">
                                    <input type="text" defaultValue={producto.title} onClick={getId} name="title" onChange={handleProduct}/>
                                </td>

                                <td className="modificar-producto-td">
                                    <input type="text" defaultValue={producto.marca} onClick={getId} name="marca" onChange={handleProduct} />
                                </td>

                                <td className="modificar-producto-td">
                                    <input type="text" defaultValue={producto.price} onClick={getId} name="price" onChange={handleProduct} />
                                </td>

                                <td className="modificar-producto-td">
                                    <input type="text" defaultValue={producto.description} onClick={getId} name="description" onChange={handleProduct} />
                                </td>

                                <td className="modificar-producto-td">
                                    <input type="text" defaultValue={producto.quantity} onClick={getId} name="quantity" onChange={handleProduct} />
                                </td>

                                <td className="modificar-producto-td">
                                    <input type="text" defaultValue={producto.imageUrl} onClick={getId} name="imageUrl" onChange={handleProduct} />
                                </td>
                                
                                <td className="modificar-producto-td">
                                    <Button onClick={()=>handleSend(producto.id)}>Modificar</Button>
                                </td>

                            </tr>
                            
                        )
                    }) 
                    : <></>}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default ModificarProducto
