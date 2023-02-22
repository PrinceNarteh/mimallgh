import { IProduct } from "@/types/product";
import { httpClient } from "@/utils/httpClient";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const res = await httpClient("/products");
      return res.data.products;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const getProductsByShopId = createAsyncThunk(
  "products/getProductsByShopId",
  async (shopId: string) => {
    const res = await httpClient(`/shops/${shopId}/products`);
    return res.data.products;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {}
);

export const editProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {}
);

export const deleteProduct = createAsyncThunk(
  "products/createProduct",
  async (productId: string) => {
    const res = await httpClient.delete(`/products/${productId}`);
    return null;
  }
);

const initialState: {
  products: IProduct[];
  filteredProducts: IProduct[];
  loading: boolean;
} = {
  products: [],
  filteredProducts: [],
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.loading = false;
      }
    );
  },
});

export default productsSlice.reducer;
