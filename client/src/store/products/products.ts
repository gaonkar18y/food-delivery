import { createSlice } from '@reduxjs/toolkit';

import { loadProductCategories, loadProducts } from './actions';
import { Product, ProductCategory } from '../../models/product';

export interface ProductState {
    products: Product[],
    productCategories: ProductCategory[],
    isLoaded: boolean,
    isLoadedCategories: boolean
}

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products:[],
        productCategories:[],
        isLoaded:false,
        isLoadedCategories:false
    },
    reducers: {
        addProducts: (state, action)=>{
            state.products.concat(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(loadProducts.fulfilled, (state, action)=>{
            state.products = action.payload;
            state.isLoaded = true;
        });

        builder.addCase(loadProductCategories.fulfilled,(state, action)=>{
            state.productCategories = action.payload;
            state.isLoadedCategories = true;
        });
    }
});


export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;