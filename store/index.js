  import { configureStore } from "@reduxjs/toolkit";
  import fetchStatusSlice from "./fetchStatusSlice";
  import itemsSlice from "./itemsSlice"
import bagSlice from "./bagSlice";

  const myntraStore = configureStore({
    reducer: {
      items:itemsSlice.reducer,
      fetchStatus: fetchStatusSlice.reducer,
      bag:bagSlice.reducer,
    },
  });
  export default myntraStore;