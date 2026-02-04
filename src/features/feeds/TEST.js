// Think - How the frontend asks functions file for news
// RTQ Query slice here
// cache responses
// deduplicate requests
// manage loading and error states
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import newsDataApi from "./TheNewsApi";


// export const initializeNewsData = createAsyncThunk(
//       "api/initializeNewsData",
//   async (_, thunkAPI) => {

// const newsDataSlice = createSlice({
//   name: "api",
//   initialState,
//   reducers: {
    // logout: (state) => {
    //   state.isAuthenticated = false;
    //   state.user = null;
    //   state.token = null;
    //   removeToken();
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchNewsData.fulfilled, (state, action) => {
  //       state.data = action.payload.data;
  //     })

  //     .addMatcher(
  //       newsDataApi.endpoints.findNewsData.matchFulfilled,
  //       (state, { payload }) => {
  //         state.data = payload.data;
  //       },
  //     )
    //   .addMatcher(
    //     userApi.endpoints.register.matchFulfilled,
    //     (state, { payload }) => {
    //       setToken(payload.token);
    //       state.isAuthenticated = true;
    //       state.token = payload.token;
    //       state.user = payload.user;
    //     },
    //   )
//   },
// });

// export const { fetchNewsData } = newsDataSlice.actions;
// export default newsDataSlice.reducer;

