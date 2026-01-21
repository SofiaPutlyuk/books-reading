import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResumeData } from "../slice/resumeSlice";
import { RootState } from "../store";
interface newResume {
    rating: number,
    resume: string
}
export const postResume = createAsyncThunk<ResumeData, newResume, { state: RootState }>(
    "resume/addResume",
    async (newResume, thunkApi) => {
        if (!newResume.resume) {
            return  thunkApi.rejectWithValue("Заповніть резюме");
        }
        try {
            const response = await fetch("http://localhost:5001/api/book/resume", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newResume)
            })
            const data: ResumeData = await response.json()
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)