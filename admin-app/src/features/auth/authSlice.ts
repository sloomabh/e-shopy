import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authServices"
import { User } from "./UserType.dt"

interface UserDefautState {
  _id: null
  firstname: null
  lastname: null
  email: null
  mobile: null
  token: null
}
interface InitialState {
  user: UserDefautState
  orders: []
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
}

const userDefautState: UserDefautState = {
  _id: null,
  firstname: null,
  lastname: null,
  email: null,
  mobile: null,
  token: null,
}

const initialState: InitialState = {
  user: userDefautState,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

// ACTIONS
export const login = createAsyncThunk(
  "auth/login",
  async (user: User, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

// REDUCER
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
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
        state.message = action.error
        state.isLoading = false
      })
  },
})

export default authSlice.reducer
