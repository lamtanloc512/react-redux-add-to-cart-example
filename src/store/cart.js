import { createSlice } from '@reduxjs/toolkit';

const cartAction = {
  addToCartAction: (state, action) => {
    const product = action.payload;
    state.value = [...state.value, product];
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: cartAction,
});

// Action creators are generated for each case reducer function
export const { addToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
