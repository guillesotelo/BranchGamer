import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

//productos
export const setProductos = createAction("set_Productos")
export const productosReducer = createReducer([], {
    [setProductos]: (state, action) => action.payload
})

//un solo producto 
export const setUnSoloProducto = createAction("set_unSoloProducto")
export const unSoloProductoReducer = createReducer([], {
    [setUnSoloProducto]: (state, action) => action.payload
})

//buscar producto
export const buscarProducto = createAction("set_buscarProducto")
export const buscarProductoReducer = createReducer("", {
    [buscarProducto]: (state, action) => action.payload
})

//Crear producto / admin
export const crearProducto = createAsyncThunk("CREAR_PRODUCTO", (producto)=>{
    const {productInput, token} = producto
    const {title, marca, categoryId, price, description, quantity, colors, imageUrl} = productInput
    return axios.post("/api/products/", {
        title : title, 
        marca : marca, 
        categoryId : Number(categoryId),
        price : Number(price),
        description : description, 
        quantity : Number(quantity),
        colors : colors.split(", "),
        imageUrl : imageUrl
    }, {
        headers : {authorization : token}
    })
    .then(res =>res.data)
})
export const crearProductoReducer = createReducer({},{
    [crearProducto.fulfilled] : (state, action) => action.payload
})

// Modificar producto existente
export const modificarProducto = createAsyncThunk("MODIFICAR_PRODUCTO", (producto)=>{
    const {inputProduct, productId, token} = producto
    return axios.put(`/api/products/${productId}`, inputProduct, {
        headers : {authorization : token}
    })
})
export const modificarProductoReducer = createReducer("", {
    [modificarProducto]: (state, action) => action.payload
})