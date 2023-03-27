import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ICartItem {
  id: string;
  title: string;
  price: number;
  qty: number;
}

interface CartState {
  cartItems: ICartItem[];
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
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const product = action.payload;
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
        state.cartItems.push(product);
      }
      console.log(state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
