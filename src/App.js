import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/todoList';
import './App.css';

const App = () => {

  const initialstate = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput ]  = useState("");
  const [todos, setTodos ] = useState(initialstate);
  const [edittodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  })
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          edittodo={edittodo}
          setEdittodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
           todos={todos}
           setTodos={setTodos}
           setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
