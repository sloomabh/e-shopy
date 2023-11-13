import {
  createAction,
  PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import productService from "./productService"
import { toast } from "react-toastify"

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
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getAProduct = createAsyncThunk(
  "product/get-product",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id)
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

export const addRating = createAsyncThunk(
  "product/rating",
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduct(data)
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
      .addCase(getAProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = "Product fetched successufuly  !"
        state.product = action.payload
      })
      .addCase(getAProduct.rejected, (state, action: PayloadAction<any>) => {
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

      .addCase(addRating.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addRating.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = "Rating Added  successufully"
        state.rating = action.payload

        if (state.isSuccess === true) {
          toast.success("Rating Added  successufully")
        }
      })
      .addCase(addRating.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
      })

      .addCase(resetState, () => initialState)
  },
})
export default productSlice.reducer
