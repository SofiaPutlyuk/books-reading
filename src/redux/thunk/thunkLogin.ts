import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginResponse } from "../slice/loginSlice";
import { RootState } from "../store";
interface newLoginData {
    email: string,
    password: string
}

export const postLoginUser = createAsyncThunk<loginResponse, newLoginData, { rejectValue: string }>(
    "login/postLoginUser",
    async (userLogin, thunkApi) => {
        try {
            const response = await fetch("http://localhost:5000/api/loginUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userLogin)
            })
            const data = await response.json()
            return data;
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)