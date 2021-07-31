import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCarritoItemsVacio } from "./cartReducer";
import { setCart } from "./setCarReducer";

export const setOrdenActual = createAsyncThunk("Set_OrdenActual", async (data, thunkAPI) => {
    try {
        const { token, loggedUser } = thunkAPI.getState()
        const req = await axios.get(`/api/cart/buy`, {
            headers: { authorization: token },
        })
        thunkAPI.dispatch(setCart({ id: loggedUser.id, token }));
        thunkAPI.dispatch(setCarritoItemsVacio())
        return req.data
    } catch (err) {
        throw err;
    }
});

const ordenActualReducer = createReducer([], {
    [setOrdenActual.fulfilled]: (state, action) => action.payload,
}
);

export default ordenActualReducer;