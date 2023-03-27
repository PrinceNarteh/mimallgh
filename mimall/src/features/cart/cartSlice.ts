import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@prisma/client";

interface IProduct {
  id: string;
  title: string;
  price: string;
  qty: number;
}

interface CartState {
  cartItems: IProduct[];
  cartTotalQty: number;
  cartTotalAmt: number;
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmt: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const productExists = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (productExists) {
        const newProducts = state.cartItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        });
        state.cartItems = newProducts;
      } else {
        state.cartItems.push(action.payload.product);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
