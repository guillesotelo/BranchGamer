import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLogginFalse, setLogginTrue } from "./authReducer";
import { setCarritoItemsVacio } from "./cartReducer";
import { setCart, setCartVoid } from "./setCarReducer";

import { setToken } from "./user";

export const setUser = createAsyncThunk("SET_USER", async (data, thunkAPI) => {
  try {
    const token = window.localStorage.getItem("branchToken");

    if (token) {
      const req = await axios.get(`/api/users/logged`, {
        headers: { authorization: token },
      });

      thunkAPI.dispatch(setToken(token));
      thunkAPI.dispatch(setLogginTrue());
      thunkAPI.dispatch(setCart({ id: req.data.id, token }));
      
      return req.data;
    }
    return {};
  } catch (err) {
    throw err;
  }
});

export const setUserVoid = createAsyncThunk(
  "SET_USER_VOID",
  async (data, thunkAPI) => {
    try {
      await axios.get(`/api/auth/logout`);

      thunkAPI.dispatch(setToken(""));
      thunkAPI.dispatch(setLogginFalse());
      thunkAPI.dispatch(setCartVoid());
      thunkAPI.dispatch(setCarritoItemsVacio());

      return {};
    } catch (err) {
      throw err;
    }
  }
);
const loggedUserReducer = createReducer(
  {},
  {
    [setUser.fulfilled]: (state, action) => action.payload,
    [setUserVoid.fulfilled]: (state, action) => action.payload,
  }
);

export default loggedUserReducer;
