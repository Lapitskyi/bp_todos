import React, {FC} from 'react';
import {IUsers} from "../../../models/IUsers";
import Avatar from "../../../components/Avatar/Avatar";
import {ITodo} from '../../../models/ITodo';
import '../css/ListItem.scss'
import {useAppDispatch} from '../../../hooks/redux';
import {toggleStatus} from '../../../redux/todoSlice';

interface ListItemProps {
    todo: any
}

const Item: FC<ListItemProps> = ({todo}) => {
    const dispatch = useAppDispatch()
    const onToggleStatus = (todo: any) => {
        dispatch(toggleStatus(todo))
    }
    return (
        <div className='wrapper' onClick={() => !todo.done ?onToggleStatus(todo) : undefined}>
            <Avatar user={todo.user }/>
            <div>{todo.title}</div>
            <div className={!todo.done ? 'click' : ''}>{!todo.done ? (!todo.completed && !todo.done ? 'to do' : 'in progress') : 'done'}</div>
        </div>
    );
};

export default Item;
