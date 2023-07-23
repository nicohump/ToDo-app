import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContex"

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {setopenModal, addTodo} = React.useContext(TodoContext);
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setopenModal(false);
    }
    const onCancel = ()=>{
            setopenModal(false);
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo ToDo</label>
            <textarea 
            placeholder="Tu texto aqui..."
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-button--container">
                <button 
                    className="TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >Cancel</button>
                <button 
                    className="TodoForm-button--add"
                    type="submit"
                    onClick={onSubmit}
                >Add</button>
            </div>
        </form>
    );
}

export { TodoForm }