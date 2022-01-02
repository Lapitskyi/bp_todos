import React, {FC} from 'react';
import {IUsers} from "../../models/IUsers";
import '../Avatar/Avatar.scss';

interface AvatarProps {
    user: IUsers
}


const Avatar: FC<AvatarProps> = ({user}) => {

    const randomColorAvatar = () => {
        let hex = Math.floor(Math.random() * 0xFFFFFF);
        return "#" + hex.toString(16);
    }

    const letterLogo = () => {
        let name = ''
        if (user && !user.avatar) {
            name = user.name || user.username
        }

        if (!name) {
            return 'JD'
        }
        let parts = name.split(/[\s]+/)
        if (parts.length > 1) {
            return parts[0].charAt(0).toUpperCase() + "" + parts[parts.length - 1].charAt(0).toUpperCase()
        }
    }


    return (
        <div className='avatar' style={{background: `${randomColorAvatar()}`}}>
            {user && user.avatar
                ? <img src={user.avatar} alt="avatar"/>
                : <span className='letter-logo'> {letterLogo()}</span>
            }
        </div>
    );
};

export default Avatar;
