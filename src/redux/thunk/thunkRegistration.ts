import { createAsyncThunk } from "@reduxjs/toolkit";
import { registrationData } from "../slice/registrationSlice";
import { RootState } from "../store";
interface newRegistrationUser {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}
export const getRegistrationUser = createAsyncThunk<registrationData[], void, { state: RootState }>(
    "registration/getRegistrationUser",
    async (_, thunkApi) => {
        try {
            const response = await fetch("http://localhost:5000/api/registrationUser")
            const data: registrationData[] = await response.json()
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
export const postRegistrationUser = createAsyncThunk<registrationData, newRegistrationUser, { state: RootState }>(
    "registration/postRegistrationUser",
    async (userRegistration, thunkApi) => {
        if(!userRegistration.name || !userRegistration.email || !userRegistration.password || !userRegistration.confirmPassword){
            alert("Заповніть поля!")
            return thunkApi.rejectWithValue("Заповніть поля!");
        }
        if(userRegistration.password !== userRegistration.confirmPassword){
            alert("Невірний пароль")
            return thunkApi.rejectWithValue("Невірний пароль")
        }
        try {
            const response = await fetch("http://localhost:5000/api/registrationUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userRegistration)
            })
            const data: registrationData = await response.json()
            return data;
        } catch (error:any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)