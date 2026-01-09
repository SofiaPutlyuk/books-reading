import { combineReducers, configureStore } from "@reduxjs/toolkit"
import registrationReducer from "./slice/registrationSlice"
import loginReducer from "./slice/loginSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["registration", "login"]
}
const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer
})
export type RootState = typeof rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)
export default store;
export type AppDispatch = typeof store.dispatch