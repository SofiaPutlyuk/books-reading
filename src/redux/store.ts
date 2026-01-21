import { combineReducers, configureStore } from "@reduxjs/toolkit"
import registrationReducer from "./slice/registrationSlice"
import loginReducer from "./slice/loginSlice";
import bookReducer from "./slice/bookSlice"
import resumeReducer from "./slice/resumeSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["registration", "login","book"]
}
const rootReducer = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    book: bookReducer,
    resume:resumeReducer
})
export type RootState = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)
export default store;
export type AppDispatch = typeof store.dispatch