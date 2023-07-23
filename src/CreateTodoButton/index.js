import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContex';

function CreateTodoButton() {
    const {setopenModal} = React.useContext(TodoContext);
    return (
        <div className='btn-container'>
            <button onClick={()=> setopenModal(state => !state)
            }>+</button>
        </div>
        );
}

export { CreateTodoButton }