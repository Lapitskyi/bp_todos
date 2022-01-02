import {ITodo} from "../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {requestTodos, requestUsers} from "./todoActions";
import {IUsers} from "../models/IUsers";

interface TodoState {
    todos: any[];
    users: IUsers[];
    loading: boolean;
    error: string;
    view: string
}

type extendTodos = ITodo & {
    done: boolean
}

const initialState: TodoState = {
    todos: [],
    users: [],
    view:'',
    loading: false,
    error: ''
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleViewsTodo(state, action){
            state.view = action.payload
        }
    },
    extraReducers: {
        //Users
        [requestUsers.fulfilled.type]: (state, action: PayloadAction<IUsers[]>) => {
            state.loading = false
            state.error = ''
            state.users = action.payload
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
            state.todos=action.payload.map(item=>({...item, 'done':false}))
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

export const {toggleViewsTodo} = todoSlice.actions

export default todoSlice.reducer;

