import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: 'idle'
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;

            })

    }

});
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('Items/get', async () =>{
    const data = await fetch('https://648d66c52de8d0ea11e7cda6.mockapi.io/Items')
    const result = await data.json();
    return result;

})


// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://648d66c52de8d0ea11e7cda6.mockapi.io/Items')
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }
// }