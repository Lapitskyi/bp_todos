import React, {FC} from 'react';
import {IUsers} from "../../../models/IUsers";
import Avatar from "../../../components/Avatar/Avatar";
import {ITodo} from '../../../models/ITodo';
import '../css/ListItem.scss'

interface ListItemProps {
    todo: any
}

const ListItem:FC<ListItemProps > = ({todo}) => {

    return (
        <div className='wrapper'>
            <Avatar user={todo.user}/>
            <div>{todo.title}</div>
            <div>{!todo.completed ? 'to do' : 'in progress'}</div>

        </div>
    );
};

export default ListItem;
