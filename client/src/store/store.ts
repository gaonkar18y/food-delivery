import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth';
import { AuthState } from './auth';
import productsReducer, { ProductState } from './products/products';

const store = configureStore({
    reducer:{
        auth: authReducer,
        products: productsReducer
    }
});

export default store;

export type RootState = {
    auth: AuthState,
    products: ProductState
}
