import { createSlice } from '@reduxjs/toolkit';

import { loadProductCategories, loadProducts } from './actions';
import { Product, ProductCategory } from '../../models/product';

export interface ProductState {
    products: Product[],
    productCategories: ProductCategory[]
}

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products:[],
        productCategories:[]
    },
    reducers: {
        addProducts: (state, action)=>{
            state.products.concat(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loadProducts.fulfilled, (state, action)=>{
            state.products = action.payload;
        });

        builder.addCase(loadProductCategories.fulfilled,(state, action)=>{
            state.productCategories = action.payload;
        });
    }
});


export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;