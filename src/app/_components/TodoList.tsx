"use client";

// src/components/TodoList.tsx
import { FC } from 'react';
import useTodoStore from '../store/todoStore';

const TodoList: FC = () => {
  const { todos, removeTodo, toggleTodo, completeTodo } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          <button onClick={() => completeTodo(todo.id)}>Complete</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
