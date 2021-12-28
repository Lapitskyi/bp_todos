import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoReducers from "./todoReducers";

const reducer = combineReducers({
    todos: todoReducers
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
