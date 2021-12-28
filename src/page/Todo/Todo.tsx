import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";

import './css/Todo.scss'
import {getUsers,getTodos} from "../../redux/todoActions";

interface TodoProps {

}

const Todo:FC<TodoProps> = () => {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    dispatch(getUsers())
    dispatch(getTodos())
    return (
        <div className='container'>
            <div>checkbox
            </div>
            <div>List</div>
            <div>Boards</div>
        </div>
    )
}

export default Todo;
