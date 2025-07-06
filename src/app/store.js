import { configureStore } from '@reduxjs/toolkit';
import empresaReducer from '../features/empresas/empresasSlice';
import institucionesReducer from '../features/instituciones/institucionesSlice'

export const store = configureStore({
    reducer: {
        empresas: empresaReducer,
        instituciones: institucionesReducer
    }
})