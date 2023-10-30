import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"
import productReducer from "../features/products/productSlice"
import blogReducer from "../features/blogs/blogSlice"
import contactReducer from "../features/contact/contactSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
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
