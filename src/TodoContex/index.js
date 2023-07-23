import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider ({ children }) {  
    const {
    item: todos, 
    refreshItem:refreshTodos,   
    loading, 
    error
    } = useLocalStorage('TODOS_V1', []);
    const [openModal, setopenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const searchTodos = todos.filter(
        (todo) => { 
            const todoText = todo.name.toLowerCase(); 
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            name:text,
            completed:false,
        });
        refreshTodos(newTodos);
    }
    const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    (todo) => todo.name === text
    );
    (newTodos[todoIndex].completed) ?  newTodos[todoIndex].completed= false
                                        :  newTodos[todoIndex].completed= true
    refreshTodos(newTodos);
    }
    const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    (todo) => todo.name === text
    );
    newTodos.splice(todoIndex,1);
    refreshTodos(newTodos);
    }

    return (
        <TodoContext.Provider value = {{   
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setopenModal,
            addTodo
            }} > 
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
