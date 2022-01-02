import React, {FC} from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import '../css/Board.scss'
import Item from './Item';

interface BoardProps {
    todos: any[],
    loading: boolean,
}

const Boards:FC<BoardProps> = ({todos, loading}) => {
    return (
        <div className='board'>
            <div className="column">
                <div className="column-title">To do</div>
                <div className="column-wrap">
                    {todos.map((todo)=>((!todo.completed && !todo.done) &&
                        <div key={todo.id}>
                            <Item todo={todo}/>
                        </div>
                    ))}

                </div>

            </div>
            <div className="column">
                <div className="column-title">In progress</div>
                <div className="column-wrap">
                    {todos.map((todo)=>(todo.completed &&
                        <div key={todo.id}>
                            <Item todo={todo}/>
                        </div>
                    ))}

                </div>
            </div>
            <div className="column">
                <div className="column-title">Done</div>
                <div className="column-wrap">
                    {todos.map((todo)=>(todo.done &&
                        <div key={todo.id}>
                            <Item todo={todo}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Boards;
