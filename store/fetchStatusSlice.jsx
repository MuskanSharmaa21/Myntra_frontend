import {createSlice} from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // ✅ Mutates the draft state only.
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true; // ✅
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false; // ✅
    }
  }
});


export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;