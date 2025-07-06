import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk de redux
export const fetchInstituciones = createAsyncThunk('instituciones/fetchInstituciones', async () => {
    const response = await fetch('http://localhost:3000/instituciones');
    const data = await response.json();
    return data;
})

const empresasSlice = createSlice({
  name: 'instituciones',
  initialState: {
    lista: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstituciones.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInstituciones.fulfilled, (state, action) => {
        state.loading = false;
        state.lista = action.payload;
      })
      .addCase(fetchInstituciones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default empresasSlice.reducer