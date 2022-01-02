import React, {FC} from 'react';
import ListItem from "./ListItem";
import {IUsers} from "../../../models/IUsers";
import Preload from "../../../components/Preloader/Preload";
import '../css/List.scss';

import { ITodo } from '../../../models/ITodo';

interface ListProps {
    todos: any[],
    loading: boolean,
}

const List: FC<ListProps> = ({todos, loading}) => {
    const inProgressTodo = todos.filter(todo => todo.completed)

    const completeTodo = todos.filter(todo => !todo.completed)
    const sortTodo = [...completeTodo, ...inProgressTodo].map(todo => todo)
    return (
        <div className='list'>
            {loading
                ? <Preload/>
                : sortTodo.map((todo) => (
                    <ListItem todo={todo} key={todo.id}/>
                ))

            }

        </div>
    );
};

export default List;
