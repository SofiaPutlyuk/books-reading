import { createSlice } from "@reduxjs/toolkit";
import { postLoginUser } from "../thunk/thunkLogin";
export interface loginResponse {
    message:string,
    user:{
        id:string,
        email:string
    }
}
export interface loginState {
    isLoading:boolean,
    error:string | null,
    isLogin:boolean,
    info:loginResponse | null
}
const initialState:loginState = {
    isLoading:false,
    error:null,
    isLogin:false,
    info:null
}
const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(postLoginUser.pending, (state) => {
            state.isLoading = true,
            state.error = null
        })
        .addCase(postLoginUser.fulfilled, (state,action) => {
            state.isLoading = false,
            state.info = action.payload
            state.error = null
        })
        .addCase(postLoginUser.rejected,(state,action) => {
          state.error = action.payload || "Помилка сервера"
        })
    },
})
export default loginSlice.reducer