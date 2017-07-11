import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => {
  return (
    <div className="list">
      <h2>All Todos</h2>
        <ul>{
            todos.map((todo, idx) => <TodoListItem todo={todo} key={idx}/>)
            // todos.map((el, idx) => <li key={idx}>{el.title}</li>)
        }</ul>
    </div>
  );
};

export default TodoList;
