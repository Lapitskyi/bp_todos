import React, {FC, useEffect, useState} from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { toggleViewsTodo } from '../../redux/todoSlice';
import '../scss/Header.scss'

interface IToggleView {
    toggleView: (view: string) => void
    viewInput: string | null
}

const Header= () => {
    const [toggleView, setToggleView] = useState<string>('board');
    const dispatch = useAppDispatch()
    const viewToggle = (view: string) => {
        setToggleView(view)
        localStorage.setItem('viewTodo', view);
        dispatch(toggleViewsTodo(view))
    }

    useEffect(()=>{
        const selectedView = localStorage.getItem('viewTodo') || null
        if(!selectedView){
            dispatch(toggleViewsTodo(toggleView))
            return  localStorage.setItem('viewTodo', toggleView);
        }
        dispatch(toggleViewsTodo(selectedView))
        return setToggleView(selectedView)
    },[])
    return (
        <div className='header'>
            <div className="container">
                <div className="action">
                    <button className={toggleView==='list' ? 'active-btn' :''} onClick={() => viewToggle('list')}>List</button>
                    <button className={toggleView==='board' ? 'active-btn' :''} onClick={() => viewToggle('board')}>Board</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
