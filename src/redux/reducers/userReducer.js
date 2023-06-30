import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isConnected: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        connect(state){
            state.isConnected = true;
        },
        disconnect(state){
            state.isConnected = false;
        },
    },
});

export const { connect, disconnect } = userSlice.actions;
export default userSlice.reducer;