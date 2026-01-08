import { createSlice } from "@reduxjs/toolkit";
import { getRegistrationUser, postRegistrationUser } from "../thunk/thunkRegistration";
export interface registrationData {
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}
export interface registrationState{
    isLoading:boolean,
    error:string | null,
    info:registrationData[]
}
const initialState:registrationState = {
    isLoading:false,
    error:null,
    info:[]
}
const registrationSlice = createSlice({
    name:"registration",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
    .addCase(getRegistrationUser.pending, (state, action) => {
        state.isLoading = true
        state.error = null
    })
    .addCase(getRegistrationUser.fulfilled, (state,action) => {
        state.isLoading = false
        state.info = action.payload
        state.error = null
    })
    .addCase(getRegistrationUser.rejected, (state, action) => {
         state.error = action.payload as string
    })
    .addCase(postRegistrationUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.info.push(action.payload)
        state.error = null
    })
    },
})
export default registrationSlice.reducer