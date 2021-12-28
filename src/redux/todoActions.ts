import {IS_LOADING, SET_TODOS, SET_USERS} from "./todoTypes";
import {API} from "../service/axios";


export const setUsers = (payload: []) => ({type: SET_USERS, payload})
export const setTodos = (payload: []) => ({type: SET_TODOS, payload})
export const toggleLoader = (payload: boolean) => ({type: IS_LOADING, payload})


export const getUsers = () => async (dispatch: any) => {
    dispatch(toggleLoader(true))
    const data = await API.getUsers()
    dispatch(setUsers(data))
    dispatch(toggleLoader(false))
}

export const getTodos = () => async (dispatch: any) => {
    dispatch(toggleLoader(true))
    const data = await API.getTodos()
    dispatch(setTodos(data))
    dispatch(toggleLoader(false))
}
