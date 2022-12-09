import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";

export const store = configureStore({
	/* object of slice reducers to be combined */
	reducer: {
        settings: settingsReducer
	}
})

// Infer the `RootState` and `AppDispatch` from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type of reducers object for dispatch
export type AppDispatch = typeof store.dispatch;