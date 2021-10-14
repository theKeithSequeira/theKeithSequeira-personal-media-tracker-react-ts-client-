import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface moviesSearchResultsState {
  value: [];
}

const initialState = {
  value: [],
};

export const moviesSearchResultsSlice = createSlice({
  name: "moviesSearchResults",
  initialState,
  reducers: {
    addMoviesSearchResults: (state, action: PayloadAction<unknown>) => {},
  },
});

export default moviesSearchResultsSlice.reducer;
