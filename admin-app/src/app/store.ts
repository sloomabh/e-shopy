import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import customerReducer from "../features/cutomers/customerSlice"
import productReducer from "../features/product/productSlice"
import brandReducer from "../features/brand/brandSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
