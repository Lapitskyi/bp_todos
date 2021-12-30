import React, {FC} from 'react';
import {IUsers} from "../../../models/IUsers";
import Avatar from "../../../components/Avatar/Avatar";
import '../css/ListItem.scss'
interface ListItemProps {
    user: IUsers,
}

const ListItem: FC<ListItemProps> = ({user}) => {

    return (
        <div className='wrapper'>
            <Avatar user={user}/>

        </div>
    );
};

export default ListItem;
