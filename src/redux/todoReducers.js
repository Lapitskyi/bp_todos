import {CREATE_TODO, DELETE_TODO, IS_LOADING, SET_TODOS, SET_USERS} from "./todoTypes";

const initialState = {
    todos: [],
    users: [],
    loading: false
};

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO :
            return {
                ...state,
                todos: [...state.todos, {id: Date.now, todo: action.todo}]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.id)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case SET_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
};

export default todoReducers;
