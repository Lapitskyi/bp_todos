import React, {FC} from 'react';
import ListItem from "./ListItem";
import {IUsers} from "../../../models/IUsers";
import Preload from "../../../components/Preloader/Preload";
import '../css/List.scss';

interface ListProps {
    users: IUsers[],
    loading: boolean
}

const List: FC<ListProps> = ({users, loading}) => {

    return (
        <div className='list'>
            {loading
                ? <Preload/>
                : users.map((user)=> (
                    <ListItem user={user} key={user.id}/>
                ))

            }

        </div>
    );
};

export default List;
