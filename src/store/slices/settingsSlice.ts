import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
    openaiApiKey: string | null
}

const initialState: SettingsState = {
    openaiApiKey: null
}

/** Returns basic user data to be displayed across site */
const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        /** Updates user data in store */
        setOpenaiApiKey: (state, { payload: { apiKey } }: PayloadAction<{ apiKey: string }>) => {
            apiKey && (state.openaiApiKey = apiKey)
        }
    }
});

export const { setOpenaiApiKey } = settingsSlice.actions;
export default settingsSlice.reducer;