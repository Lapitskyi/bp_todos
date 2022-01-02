import React, {FC, useEffect, useMemo, useState, ChangeEvent} from "react";
import {requestUsers, requestTodos} from "../../redux/todoActions";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import List from "./components/List";
import Boards from "./components/Boards";

import {IUsers} from "../../models/IUsers";
import {ITodo} from "../../models/ITodo";
import './css/Todo.scss'

interface ITogle {
    toggle: boolean,
    setToggle: (toggle: boolean) => void
}

const Todo = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {users, todos, loading, error, view} = useAppSelector(state => state.todoReducers)

    const todosExtend = () =>{
        return todos.map((todo: ITodo) => {
            return {
                ...todo,
                user: users?.find((user: IUsers) => {
                    if (user.id === todo.userId) {
                        return user
                    }
                })
            }
        })
    }

    useEffect(()=>{
        todosExtend()
    },[users.length,todos.length])

    useEffect(() => {
        dispatch(requestUsers())
        dispatch(requestTodos())
    }, [])

    return (
        <div className='todo'>

            <div className='container'>
                {error && 'Что-то пошло не так....'}
                {!error && view === 'list'
                    ? < List todos={todosExtend()} loading={loading}/>
                    : <Boards todos={todosExtend()} loading={loading}/>
                }
            </div>
        </div>

    )
}

export default Todo;
