import { createAction, createReducer } from "@reduxjs/toolkit";

//usuarios
export const setUsers = createAction("set_Users");
export const usuariosReducer = createReducer([], {
  [setUsers]: (state, action) => action.payload,
});

//favoritos
export const setFavoritos = createAction("set_Favoritos");
export const favoritosReducer = createReducer([], {
  [setFavoritos]: (state, action) => action.payload,
});

//login
export const setLogin = createAction("set_Login");
export const loginReducer = createReducer([], {
  [setLogin]: (state, action) => action.payload,
});

//register
export const setRegister = createAction("set_Register");
export const registerReducer = createReducer(
  {
    name: "",
    email: "",
    password: "",
  },
  {
    [setRegister]: (state, action) => action.payload,
  }
);

//token

export const setToken = createAction("SET_TOKEN");

export const tokenReducer = createReducer("", {
  [setToken]: (state, action) => action.payload,
});




