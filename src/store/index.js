import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  usuariosReducer,
  favoritosReducer,
  loginReducer,
  registerReducer,
  tokenReducer,
} from "./user";
import {
  productosReducer,
  unSoloProductoReducer,
  buscarProductoReducer,
  crearProductoReducer
} from "./productos";
import loggedUserReducer from "./loggedUserReducer";
import authReducer from "./authReducer";
import SetCartReducer from "./setCarReducer";
import cartReducer from "./cartReducer";
import adminUserReducer from "./admin"
import ordenesReducer from "./ordenesReducer";
import ordenActualReducer from "./ordenActual";
import ordenConItemsReducer from "./ordenConItems";
import googleReducer from "./googleReducer";
import categoriesReducer from "./categories";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    //usuarios
    usuarios: usuariosReducer,
    favoritos: favoritosReducer,
    register: registerReducer,
    login: loginReducer,
    ordenes: ordenesReducer,

    //log
    token: tokenReducer,
    loggedUser: loggedUserReducer,
    isLogIn: authReducer,

    // Logueado con Google
    googleLogin: googleReducer,

    //productos
    productos: productosReducer,
    productoIndividual: unSoloProductoReducer,
    item: buscarProductoReducer,
    //carrito
    cartInUse: SetCartReducer,
    cartItems: cartReducer,
    
    //admin
    allUsers : adminUserReducer, 
    productoCreado : crearProductoReducer,
    ordenActual: ordenActualReducer,
    ordenConItems: ordenConItemsReducer,

    //categorías
    categories: categoriesReducer,
  },
});

export default store;
