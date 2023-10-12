import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import customerReducer from "../features/cutomers/customerSlice"
import productReducer from "../features/product/productSlice"
import brandReducer from "../features/brand/brandSlice"
import pCategoryReducer from "../features/pcategory/pcategorySlice"
import bCategoryReducer from "../features/bcategory/bcategorySlice"
import blogReducer from "../features/blogs/blogSlice"
import colorReducer from "../features/color/colorSlice"
import enquiryReducer from "../features/enquiry/enquirySlice"
import couponReducer from "../features/coupon/couponSlice"
import uploadReducer from "../features/upload/uploadSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    blogs: blogReducer,
    color: colorReducer,
    enquiry: enquiryReducer,
    coupon: couponReducer,
    upload: uploadReducer,
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
