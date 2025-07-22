import { createSlice, createSelector } from "@reduxjs/toolkit";
import quotesData from "./quotesData";

const initialState = {
  quotes: quotesData,
  filter: "all",
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { setFilter } = quotesSlice.actions;

export const selectFilteredQuotes = createSelector(
  (state) => state.quotes.quotes,
  (state) => state.quotes.filter,
  (quotes, filter) => {
    if (filter === "all") {
      return quotes;
    }
    return quotes.filter((quote) => quote.category === filter);
  }
);

export default quotesSlice.reducer;
