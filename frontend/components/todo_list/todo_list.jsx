import React from 'react';
import TodoListItem from './todo_list_item';
import ToDoForm from './todo_form';
import {receiveTodo} from '../../actions/todo_actions';

const TodoList = ({ todos }) => {
  return (
    <div className="list">
      <h2>All Todos</h2>
        <ul>{
            todos.map((todo, idx) => <TodoListItem todo={todo} key={idx}/>)
            // todos.map((el, idx) => <li key={idx}>{el.title}</li>)
        }</ul>
      <ToDoForm receiveTodo={receiveTodo} />
    </div>
  );
};

export default TodoList;
