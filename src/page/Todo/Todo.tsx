import React, {FC, useEffect, useMemo, useState} from "react";
import {requestUsers, requestTodos} from "../../redux/todoActions";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import List from "./components/List";

import './css/Todo.scss'
import {IUsers} from "../../models/IUsers";
import {ITodo} from "../../models/ITodo";
import {log} from "util";

interface TodoProps {
}

const Todo: FC<TodoProps> = () => {
    const [toggle, setToggle] = useState(false)
    const dispatch = useAppDispatch()

    const {users, todos, loading, error} = useAppSelector(state => state.todoReducers)

    const usersMemo = useMemo(() => {
        return users.map((user) => {
            return {
                ...user,
                todos: todos.filter(todo => {
                    if (todo.userId === user.id) {
                        return todo
                    }
                })
            }
        })

    }, [users, todos])

    useEffect(() => {
        dispatch(requestUsers())
        dispatch(requestTodos())
    }, [])

    return (
        <div className='todo'>
            <div className='container'>

                <List users={usersMemo} loading={loading}/>

            </div>
        </div>

    )
}

export default Todo;
