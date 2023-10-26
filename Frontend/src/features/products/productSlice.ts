import {
  createAction,
  PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import productService from "./productService"

import { ProductType, ProductDefautState } from "./productType.dt"

interface InitialState {
  product: ProductDefautState[]
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  createdProduct?: any
  addTowishlist?: any
}

//Actions

export const getAllProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await productService.getProducts()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
export const resetState = createAction("Reset_all")

const initialState: InitialState = {
  product: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  createdProduct: {},
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false
          state.isError = false
          state.isSuccess = true
          state.product = action.payload
        },
      )
      .addCase(getAllProducts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToWishlist.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.addTowishlist = action.payload
      })
      .addCase(addToWishlist.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = "Product Added to Wishlist"
      })

      .addCase(resetState, () => initialState)
  },
})
export default productSlice.reducer
