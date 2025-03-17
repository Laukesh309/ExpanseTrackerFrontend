import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ExpanseTrackerSlice from "../reducer/expanseTrackerReducer";
import { expanseTrackerApi } from "../Api";

export const store = configureStore({
  reducer: {
    [expanseTrackerApi.reducerPath]: expanseTrackerApi.reducer,
    expanseTrackerManager: ExpanseTrackerSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(expanseTrackerApi.middleware);
  },
});

setupListeners(store.dispatch);
