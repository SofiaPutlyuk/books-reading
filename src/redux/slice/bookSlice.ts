import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBook, postBook } from "../thunk/thunkBook";
export type BookStatus = "intention" | "reading" | "finished"
export interface bookData {
    name: string,
    author: string,
    publish: number,
    pageCount: number,
    status:BookStatus
}
export interface bookState {
    isLoading: boolean,
    error: null | string,
    info: bookData[],
    isSuccess:boolean,
}
const initialState: bookState = {
    isLoading: false,
    error: null,
    info: [],
    isSuccess:false
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        resetBookStatus:(state) => {
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBook.pending, (state, action) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getBook.fulfilled, (state, action) => {
                state.isLoading = false
                state.info = action.payload
                state.error = null
            })
            .addCase(getBook.rejected, (state, action) => {
                state.isLoading = false
                state.error = null
            })
            .addCase(postBook.fulfilled, (state,action) => {
                state.isLoading = false
                state.info.push(action.payload)
                state.isSuccess = true
                state.error = null
            })
    }
})
export const {resetBookStatus} = bookSlice.actions
export default bookSlice.reducer;