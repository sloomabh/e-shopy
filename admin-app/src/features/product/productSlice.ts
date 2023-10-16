import {
  createAction,
  PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import productService from "./productService"

import { ProductType, ProductDefautState } from "./productType.dt"

interface InitialState {
  products: ProductDefautState[]
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  createdProduct?: any
}

//Actions
export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await productService.getProducts()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
export const createProducts = createAsyncThunk(
  "product/create-products",
  async (productData: ProductType, thunkAPI) => {
    try {
      return await productService.createProduct(productData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const resetState = createAction("Reset_all")

const initialState: InitialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  createdProduct: {},
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(createProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        createProducts.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false
          state.isError = false
          state.isSuccess = true
          state.createdProduct = action.payload
        },
      )
      .addCase(createProducts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, () => initialState)
  },
})
export default productSlice.reducer
