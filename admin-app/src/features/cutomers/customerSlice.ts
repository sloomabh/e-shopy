import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import customerService from "./customerService"
import { CustomerDefaultType } from "./CostomerType.dt"

//ACTION
export const getUsers = createAsyncThunk(
  "customer/get-customers",
  async (thunkAPI) => {
    try {
      return await customerService.getUsers()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

interface InitialState {
  customers: CustomerDefaultType[]
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
}

const initialState: InitialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

//Reducer
export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.customers = action.payload
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})
export default customerSlice.reducer
