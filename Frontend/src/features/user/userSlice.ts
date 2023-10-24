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
/*
export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (thunkAPI) => {
    try {
      return await authService.getOrders()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
export const getOrderByUser = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await authService.getOrder(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
*/
interface InitialState {
  user: any
  CreatedUser: any
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  orderbyuser?: any
}

const initialState: InitialState = {
  user: "",
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
    /* .addCase(getOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.orders = action.payload
        state.message = "success"
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(getOrderByUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrderByUser.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.orderbyuser = action.payload
        state.message = "success"
      })
      .addCase(getOrderByUser.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })*/
  },
})

export default authSlice.reducer
