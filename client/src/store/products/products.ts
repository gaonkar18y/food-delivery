import { createSlice } from '@reduxjs/toolkit';

import { loadProducts } from './actions';
import { Product } from '../../models/product';

export interface ProductState {
    products: Product[]
}

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products:[]
    },
    reducers: {
        addProducts: (state, action)=>{
            state.products.concat(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loadProducts.fulfilled, (state, action)=>{
            state.products = action.payload;
        })
    }
});


export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;