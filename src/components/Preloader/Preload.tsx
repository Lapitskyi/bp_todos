import React from 'react';
import preload from '../../assets/images/preload.gif'

const Preload = () => {
    return (
        <div className='preloader'>
            <img className='preloader-img' src={preload} alt="...loading"/>
        </div>

    );
};

export default Preload;
