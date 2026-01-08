import {configureStore} from "@reduxjs/toolkit"
import registrationReducer from "./slice/registrationSlice"
import loginReducer from "./slice/loginSlice"
const store = configureStore({
    reducer:{
        registration:registrationReducer,
        login:loginReducer
    }
})
export default store;
export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch