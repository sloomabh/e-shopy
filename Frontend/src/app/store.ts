import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"
import productReducer from "../features/products/productSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
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
