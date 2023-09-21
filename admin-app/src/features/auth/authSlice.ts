import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authServices"
import { UserInput, UserDefautType } from "./UserType.dt"

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

// ACTIONS
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

interface InitialState {
  user: UserDefautType | null
  orders: []
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
}

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
        state.message = "Rejected"
        state.isLoading = false
      })
  },
})

export default authSlice.reducer
