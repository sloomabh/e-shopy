import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import blogService from "./blogService"
import { BlogDefautType } from "./blogType.dt"

export const getAllBlogs = createAsyncThunk(
  "blog/get-blogs",
  async (thunkAPI) => {
    try {
      return await blogService.getBlogs()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getABlog = createAsyncThunk(
  "blog/get-blog",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

interface InitialState {
  blogs: BlogDefautType[]
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: any
  singleBlog: any
}

const initialState: InitialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
}

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogs = action.payload
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })

      .addCase(getABlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.singleBlog = action.payload
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})
export default blogSlice.reducer
