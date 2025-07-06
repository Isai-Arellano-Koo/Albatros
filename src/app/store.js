import { configureStore } from '@reduxjs/toolkit';
import empresaReducer from '../features/empresas/empresasSlice';

export const store = configureStore({
    reducer: {
        empresas: empresaReducer
    }
})