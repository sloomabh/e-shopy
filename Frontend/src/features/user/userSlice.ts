import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./userServices"
import { toast } from "react-toastify"
import { UserInput, UserDefautType } from "./UserType.dt"

// ACTIONS
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: UserInput, thunkAPI) => {
    try {
      return await authService.register(userData)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: UserInput, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getUserProductWishlist = createAsyncThunk(
  "user/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist()
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const addProdToCart = createAsyncThunk(
  "user/cart/add",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getUserCart = createAsyncThunk(
  "user/cart/get",
  async (thunkAPI) => {
    try {
      return await authService.getCart()
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const deleteACartProduct = createAsyncThunk(
  "user/cart/product/delete",
  async (id, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(id)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const updateACartProduct = createAsyncThunk(
  "user/cart/product/update",
  async (cartDetail, thunkAPI) => {
    try {
      return await authService.updateProductFromCart(cartDetail)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

interface InitialState {
  user: any
  CreatedUser: any
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  orderbyuser?: any
  wishlist?: any
}

// Get User from local storage
const getUserfromLocalStorage = localStorage.getItem("customer")

const initialState: InitialState = {
  user: getUserfromLocalStorage ? JSON.parse(getUserfromLocalStorage) : null,
  CreatedUser: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

// REDUCER
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.CreatedUser = action.payload
        state.message = "success"
        if (state.isSuccess === true) {
          toast.info("User Created Successfully")
        }
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
        if (state.isError === true) {
          toast.info(action.error)
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.message = "success"

        if (state.isSuccess === true) {
          localStorage.setItem("Token", action.payload.token)
          toast.info("User logged in  Successfully")
        }
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
        if (state.isError === true) {
          toast.info(action.error)
        }
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getUserProductWishlist.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isError = false
          state.isLoading = false
          state.isSuccess = true
          state.wishlist = action.payload
          state.message = "success"
        },
      )
      .addCase(
        getUserProductWishlist.rejected,
        (state, action: PayloadAction<any>) => {
          state.isError = true
          state.isSuccess = false
          state.message = action.error
          state.isLoading = false
        },
      )
      .addCase(addProdToCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProdToCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.cartProduct = action.payload
        state.message = "success"
        if (state.isSuccess === true) {
          toast.info("Product added to Cart")
        }
      })
      .addCase(addProdToCart.rejected, (state, action: PayloadAction<any>) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
        if (state.isError === true) {
          toast.error("something went wrong")
        }
      })

      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserCart.fulfilled, (state, action: PayloadAction<any>) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.cartProducts = action.payload
        state.message = "success"
        if (state.isSuccess === true) {
          toast.info("Product added to Cart")
        }
      })
      .addCase(getUserCart.rejected, (state, action: PayloadAction<any>) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
        if (state.isError === true) {
          toast.error("something went wrong")
        }
      })

      .addCase(deleteACartProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        deleteACartProduct.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isError = false
          state.isLoading = false
          state.isSuccess = true
          state.message = "success"
          state.deletedProduct = action.payload
          if (state.isSuccess === true) {
            toast.info("Product deleted from Cart")
          }
        },
      )
      .addCase(
        deleteACartProduct.rejected,
        (state, action: PayloadAction<any>) => {
          state.isError = true
          state.isSuccess = false
          state.message = action.error
          state.isLoading = false
          if (state.isError === true) {
            toast.error("something went wrong")
          }
        },
      )

      .addCase(updateACartProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        updateACartProduct.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isError = false
          state.isLoading = false
          state.isSuccess = true
          state.message = "success"
          state.updatedProduct = action.payload
          if (state.isSuccess === true) {
            toast.info("Product updated from Cart successufully")
          }
        },
      )
      .addCase(
        updateACartProduct.rejected,
        (state, action: PayloadAction<any>) => {
          state.isError = true
          state.isSuccess = false
          state.message = action.error
          state.isLoading = false
          if (state.isError === true) {
            toast.error("something went wrong")
          }
        },
      )
  },
})

export default authSlice.reducer
