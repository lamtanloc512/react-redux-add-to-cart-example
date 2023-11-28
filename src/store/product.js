import { createSlice } from '@reduxjs/toolkit';

const productAction = {
  firstLoad: (state, action) => {
    state.value = action.payload;
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: [],
  },
  reducers: productAction,
});

// Action creators are generated for each case reducer function
export const { firstLoad } = productSlice.actions;

export default productSlice.reducer;
