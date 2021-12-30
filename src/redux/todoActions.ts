import {API} from "../service/axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const requestUsers = createAsyncThunk(
    'user/fetchAll',
    async () => {
        const data = await API.getUsers()
        return data
    }
)

export const requestTodos = createAsyncThunk(
    'todos/fetchAll',
    async () => {
        const data = await API.getTodos()
        return data
    }
)

