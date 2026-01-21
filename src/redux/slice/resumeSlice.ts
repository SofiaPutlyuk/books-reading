import { createSlice } from "@reduxjs/toolkit";
import { postResume } from "../thunk/thunkResume";
export interface ResumeData {
    rating:number,
    resume:string
}
export interface ResumeState {
    isLoading:boolean,
    error:null | string,
    info:ResumeData[]
}
const initialState: ResumeState = {
    isLoading:false,
    error:null,
    info:[]
}
const resumeSlice = createSlice({
    name:"resume",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
    .addCase(postResume.fulfilled, (state, action) => {
        state.isLoading = false
        state.info.push(action.payload)
        state.error = null
    })
    },
})
export default resumeSlice.reducer