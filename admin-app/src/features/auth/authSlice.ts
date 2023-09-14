import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const userDefautState = {
  _id: null,
  firstname: null,
  lastname: null,
  email: null,
  mobile: null,
  token: null,
}
const initialState = {
  user: userDefautState,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}
