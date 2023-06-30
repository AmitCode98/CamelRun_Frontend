import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

// Load the persisted state from sessionStorage
const persistedState = sessionStorage.getItem("reduxState")
    ? JSON.parse(sessionStorage.getItem("reduxState"))
    : {};

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: {
        user: persistedState.user,
    },
});

// Save the state to sessionStorage whenever it changes
store.subscribe(() => {
    sessionStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;