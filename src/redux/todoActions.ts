import {API} from "../service/axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const requestUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await API.getUsers()
            return data
        }
        catch (err) {
            return thunkAPI.rejectWithValue('Что-то пошло не так....')
        }
    }
)

export const requestTodos = createAsyncThunk(
    'todos/fetchAll',
    async (_, thunkAPI) => {
        try {
            const data = await API.getTodos()
            return data
        }
        catch (err) {
           return thunkAPI.rejectWithValue('Что-то пошло не так....')
        }

    }
)

