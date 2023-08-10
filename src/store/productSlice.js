import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING;

            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE;

            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }

});
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('Items/get', async () => {
    const data = await fetch('https://648d66c52de8d0ea11e7cda6.mockapi.io/Items')
    const result = await data.json();
    return result;

})

