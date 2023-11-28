import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product';
import cartSlice from './cart';

export default configureStore({
  reducer: { product: productSlice, cart: cartSlice },
});
