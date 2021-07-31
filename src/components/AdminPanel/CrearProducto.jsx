import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { crearProducto } from "../../store/productos"
import { Alert, Form  } from "react-bootstrap"

const CrearProducto = () => {

    const [productInput, setProductInput] = useState()
    const dispatch = useDispatch()

    const [showSuccess, setShowSuccess] = useState(false);

    const token = useSelector(state => state.token)

    const handleInput = ({ target }) => {
        setProductInput((productInput) => {
            return {
                ...productInput,
                [target.name]: target.value,
            };
        });
    }

    const handleCreate = () => {
        // console.log("PRODUCTO CREADO", productInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("PRODUCTO CREADO", productInput)
        dispatch(crearProducto({ productInput, token }))
            .then(() => setShowSuccess(true))
    }


    return (
        <div className="w-100 crear-producto-section " >
            <h4 className="admin-section-title" >Crear un nuevo producto</h4>
            <div className="col-12">
                <form action="" onSubmit={handleSubmit} className="crear-producto-form">
                    <div className="row w-100">
                        <div className="col-12 col-md-6 mb-4 ">
                            {/* <div className="row align-items-center ">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Titulo</label>
                            </div> */}
                                <input className="crer-producto-input"
                                    type="text"
                                    name="title"
                                    placeholder="Titulo"
                                    required
                                    onChange={handleInput}
                                />
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            {/* <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Marca</label>
                                <input className="col-9 col-md-7 crer-producto-input"
                                    type="text"
                                    name="marca" required
                                    onChange={handleInput}
                                />
                            </div> */}
                            <input className=" crer-producto-input"
                                    type="text"
                                    placeholder="Marca"
                                    name="marca" required
                                    onChange={handleInput}
                                />
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            <div className="row align-items-center">
                                {/* <label className="col-3 d-flex justify-content-start" htmlFor="">Categoría</label> */}
                                <div className="crer-producto-input ">
                                    <Form >
                                    <Form.Group className="w-100">
                                        <Form.Control as="select" name="categoryId" onChange={handleInput}  custom className="crer-producto-input" 
                                        style={{borderRadius : "20px"}}>
                                            <option hidden selected >Selecciona una categoría</option>
                                            <option value="1" >Pc's completas</option>
                                            <option value="2" >Laptops</option>
                                            <option value="3" >Monitores</option>
                                            <option value="4" >Teclados</option>
                                            <option value="5" >Mouses</option>
                                            <option value="6" >Procesadores</option>
                                            <option value="7" >Mothers</option>
                                            <option value="8" >Memorias Ram</option>
                                            <option value="9" >Fuentes</option>
                                            <option value="10" >Auriculares</option>
                                            <option value="11" >Cables</option>
                                            <option value="12" >Impresoras</option>
                                        </Form.Control>
                                    </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            {/* <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Precio</label>
                            </div> */}
                                <input className="crer-producto-input"
                                    required
                                    type="number"
                                    placeholder="Precio"
                                    onChange={handleInput}
                                    name="price" />
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            {/* <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Descripción</label>
                            </div> */}
                                <input className=" crer-producto-input"
                                    type="text"
                                    name="description"
                                    required
                                    placeholder="Descripción"
                                    onChange={handleInput}
                                />
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            {/* <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Cantidad</label>
                            </div> */}
                                <input className=" crer-producto-input"
                                    type="number"
                                    name="quantity"
                                    placeholder="Cantidad"
                                    required
                                    onChange={handleInput}
                                />
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            {/* <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start" htmlFor="">Colores</label>
                            </div> */}
                                <input className="crer-producto-input"
                                    type="text"
                                    name="colors"
                                    required
                                    placeholder="Colores"
                                    onChange={handleInput}
                                />
                        </div>

                        <div className="col-12 col-md-6 mb-4">
                            {/* <div className="row align-items-center">
                                <label className="col-3 d-flex justify-content-start " htmlFor="">Imagen</label>
                            </div> */}
                                <input className=" crer-producto-input"
                                    type="text"
                                    name="imageUrl"
                                    required
                                    placeholder="Imagen Url"
                                    onChange={handleInput}
                                />
                        </div>

                        <div className="col-12 d-flex justify-content-end mt-2 mb-2 p-0">
                            <button type="submit" className="btn btn-primary user-card-button d-flex align-items-center"

                            >
                                Crear producto
                            </button>
                        </div>

                        {showSuccess ?
                        <>
                            <Alert  className={"crear-producto-alert"} variant="success" onClose={() => setShowSuccess(false)} dismissible>
                                <Alert.Heading>Branch&Gamer</Alert.Heading>
                                <p>
                                    Producto creado correctamente
                                        </p>
                            </Alert>
                        </>
                        : null}


                    </div>
                </form>
            </div>
        </div>
    )
}


/**
 * {
        "title": "notebook asus ryzen 7",
        "marca": "asus",
        "categoryId": 2,
        "price": 135000,
        "description": "muy buena compu",
        "quantity": 18,
        "colors": [
            "black",
            "white",
            "blue",
            "brown"
        ],
        "imageUrl": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26623_Notebook_ASUS_TUF_FA506_15.6__144Hz_Ryzen_7_4800H_GTX1660Ti_6GB_DDR4_16GB__M.2_512GB_d1b51c53-grn.jpg"
    }
 */

export default CrearProducto
