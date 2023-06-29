import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import userSlice from "../userSlice";
import appointmentSlice from "../appointmentSlice";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: userSlice,
    appointment: appointmentSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)