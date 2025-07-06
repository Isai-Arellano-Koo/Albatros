import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk de redux
export const fetchEmpresas = createAsyncThunk('empresas/fetchEmpresas', async () => {
    const response = await fetch('http://localhost:3000/empresas');
    const data = await response.json();
    return data;
})

const empresasSlice = createSlice({
  name: 'empresas',
  initialState: {
    lista: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmpresas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmpresas.fulfilled, (state, action) => {
        state.loading = false;
        state.lista = action.payload;
      })
      .addCase(fetchEmpresas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default empresasSlice.reducer