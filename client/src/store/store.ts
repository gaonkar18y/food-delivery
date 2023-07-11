import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth';
import { AuthState } from './auth';

const store = configureStore({
    reducer:{
        auth: authReducer
    }
});

export default store;

export type RootState = {
    auth: AuthState
}
