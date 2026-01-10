import { createAsyncThunk } from "@reduxjs/toolkit";
import { bookData } from "../slice/bookSlice";
import { RootState } from "../store";
interface newBookData {
    name: string,
    author: string,
    publish: number,
    pageCount: number
}
export const getBook = createAsyncThunk<bookData[], void, { state: RootState }>(
    "book/getBook",
    async (_, thunkApi) => {
        try {
            const response = await fetch("http://localhost:5001/api/book")
            const data: bookData[] = await response.json()
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
export const postBook = createAsyncThunk<bookData, newBookData, { state: RootState }>(
    "book/postBook",
    async (book, thunkApi) => {
        if(!book.name || !book.author || !book.pageCount || !book.publish){
            alert("Заповніть поля")
            return thunkApi.rejectWithValue("Заповніть поля");
        }
        try {
            const response = await fetch("http://localhost:5001/api/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            })
            const data: bookData = await response.json()
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)