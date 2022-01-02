import React, {FC} from 'react';
import Item from "./Item";
import {IUsers} from "../../../models/IUsers";
import Preload from "../../../components/Preloader/Preload";
import '../css/List.scss';

import { ITodo } from '../../../models/ITodo';

interface ListProps {
    todos: any[],
    loading: boolean,
}

const List: FC<ListProps> = ({todos, loading}) => {
    const inProgress = todos.filter(todo => todo.completed)
    const todo = todos.filter(todo => !todo.completed && !todo.done)
    const done = todos.filter(todo => todo.done )
    return (
        <div className='list'>
            {loading
                ? <Preload/>
                : [...todo, ...inProgress, ...done].map((todo) => (
                    <Item todo={todo} key={todo.id}/>
                ))

            }

        </div>
    );
};

export default List;
