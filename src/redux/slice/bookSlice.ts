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
interface UpdateStatusPayload {
    name:string,
    author:string,
    status:BookStatus
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        resetBookStatus:(state) => {
            state.isSuccess = false
        },
        updateBookStatus:(state,action:PayloadAction<UpdateStatusPayload>) => {
        const {name, author, status} = action.payload
        const book = state.info.find((b) => b.name  === name && b.author === author)
        if(book){
            book.status = status
        }
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
                const newBook = {...action.payload, status:"intention" as BookStatus};
                state.isLoading = false
                state.info.push(newBook)
                state.isSuccess = true
                state.error = null
            })
    }
})
export const {resetBookStatus, updateBookStatus} = bookSlice.actions
export default bookSlice.reducer;