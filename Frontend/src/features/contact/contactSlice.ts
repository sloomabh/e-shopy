import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import postQuery from "./contactService"
//import { EnqueryDefautType } from "./enquiryType.dt"

export const createQuery = createAsyncThunk(
  "contact/post",
  async (contatData, thunkAPI) => {
    try {
      return await postQuery.getEnquiries(contatData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const resetState = createAction("Reset_all")

interface InitialState {
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  contact: any
}

const initialState: InitialState = {
  contact: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.contact = action.payload
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })

      .addCase(resetState, () => initialState)
  },
})
export default contactSlice.reducer
