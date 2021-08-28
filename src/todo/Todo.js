import React from 'react';
import AddTodo from './AddTodo';
import './style.scss';
const Todo = ()=> {
    return (
        <div className="todo">
            <h2>Todo List</h2>
            <AddTodo/>
        </div>
    )
};
export default Todo;