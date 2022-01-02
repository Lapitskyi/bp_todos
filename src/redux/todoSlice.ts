import {ITodo} from "../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {requestTodos, requestUsers} from "./todoActions";
import {IUsers} from "../models/IUsers";

interface TodoState {
    todos: ITodo[];
    users: IUsers[];
    loading: boolean;
    error: string;
}

const initialState: TodoState = {
    todos: [],
    users: [],
    loading: false,
    error: ''
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { },
    extraReducers: {
        //Users
        [requestUsers.fulfilled.type]: (state, action: PayloadAction<IUsers[]>) => {
            state.loading = false
            state.error = ''
            state.users = [...state.users, ...action.payload]

        },
        [requestUsers.pending.type]: (state, action: PayloadAction<boolean>) => {
            state.loading = true
        },
        [requestUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        //Todos
        [requestTodos.fulfilled.type]:(state, action:PayloadAction<ITodo[]>)=>{
            state.loading = false
            state.error = ''
            state.todos=[...state.todos, ...action.payload]
        },
        [requestTodos.pending.type]: (state, action: PayloadAction<boolean>) => {
            state.loading = true
        },
        [requestTodos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default todoSlice.reducer;

