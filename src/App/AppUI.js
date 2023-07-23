import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoList/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from "../TodoLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContex";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm"

function AppUI () 
{
  const {         
    loading,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal} = React.useContext(TodoContext)
    return (
        <>
          <TodoCounter />
          <TodoSearch /> 
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchTodos.length === 0) && <EmptyTodos />}
            {searchTodos.map(todo => (
              <TodoItem 
                key = {todo.name} 
                text = {todo.name}
                completed = {todo.completed}
                onCompleted = {() => completeTodo(todo.name)}
                onDeleted = {() => deleteTodo(todo.name)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
          {openModal && 
            <Modal>
              <TodoForm />
            </Modal>}
        </>
    );
  }

  export { AppUI };