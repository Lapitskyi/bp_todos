import React, {FC} from 'react';

interface AvatarProps {
    user?: object | null
}


const Avatar: FC<AvatarProps> = ({user}) => {

    return (
        <div>
            <img src='' alt="avatar"/>
        </div>
    );
};

export default Avatar;
