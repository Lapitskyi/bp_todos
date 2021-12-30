import React from 'react';

const Boards = ({}) => {
    return (
        <div className='board'>
            <div className="column">
                <div className="column-title">To do</div>
                <div>

                </div>

            </div>
            <div className="column">
                <div className="column-title">In progress</div>
                <div></div>
            </div>
            <div className="column">
                <div className="column-title">Done</div>
                <div></div>
            </div>
        </div>
    );
};

export default Boards;
