import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./userServices"
import { UserInput, UserDefautType, OrdersDefautType } from "./UserType.dt"

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
/*
export const login = createAsyncThunk(
  "auth/login",
  async (user: UserInput, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

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
  user: UserDefautType | null
  orders: OrdersDefautType[]
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  orderbyuser?: any
}

// Get User from local storage
const getUserfromLocalStorage = localStorage.getItem("user")

const initialState: InitialState = {
  user: getUserfromLocalStorage ? JSON.parse(getUserfromLocalStorage) : null,
  orders: [],
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
        state.user = action.payload
        state.message = "success"
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isError = true
        state.isSuccess = false
        state.message = "Rejected"
        state.isLoading = false
      })
    /* .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        state.message = "success"
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isError = true
        state.isSuccess = false
        state.message = "Rejected"
        state.isLoading = false
      })
      .addCase(getOrders.pending, (state) => {
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
