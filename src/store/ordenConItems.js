import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductFromDbAndSetQuantities, getCartItems } from "../utils";

export const setOrdenConItems = createAsyncThunk("set_OrdenConItems", async (data, thunkAPI) => {
    try {
        const { ordenes, token } = thunkAPI.getState()
        const ordenItems = await Promise.all(
            ordenes.map((orden) => {
                return getCartItems(orden.id, token)
            })
        );
        const ordenConItems = await Promise.all(
            ordenItems.map((oneOrdenItems) => {
                return getProductFromDbAndSetQuantities(oneOrdenItems)
            })
        );

        const result = ordenes.map((orden, i) => ({
            id: orden.id,
            products: ordenConItems[i],
        }))

        return result
        // ordenes.map((orden) => {
        //     getCartItems(orden.id, token)
        // .then((data) => {
        //     return getProductFromDbAndSetQuantities(data);
        // })
        // .then((productos) => {
        //     setOrdenConItems((state) => [
        //         ...state,
        //         { ordenId: orden.id, productos },
        //     ]);
        // });
        // });
    } catch (err) {
        throw err;
    }
});

const ordenConItemsReducer = createReducer([], {
    [setOrdenConItems.fulfilled]: (state, action) => action.payload,
}
);

export default ordenConItemsReducer;