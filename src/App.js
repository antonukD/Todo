import { useState } from 'react';
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    setTodos([...todos, text]) 
  }
  const deleteTodoHandler = (index) => (
    setTodos(todos.filter((_, idx) => idx !== index))
  )

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>

    </div>
  );
}

export default App;
