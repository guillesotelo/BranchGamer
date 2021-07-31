import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setOrdenes = createAsyncThunk("SET_ORDENES", async (data, thunkAPI) => {
    try {
        const { token } = thunkAPI.getState()
        const req = await axios.get(`/api/users/carritos`, {
            headers: { authorization: token },
        });
        return req.data
    } catch (err) {
        throw err;
    }
});

const ordenesReducer = createReducer([], {
    [setOrdenes.fulfilled]: (state, action) => action.payload,
}
);

export default ordenesReducer;