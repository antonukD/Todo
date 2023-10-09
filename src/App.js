import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
import TodosActions from './components/todos/TodosActions';
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo]) 
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id 
          ? {...todo, isCompleted: !todo.isCompleted}
          : {...todo}
    ))
  }
 
  const deleteTodoHandler = (id) => (
    setTodos(todos.filter((todo) => todo.id !== id))
  )

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1 className='hh1'>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions 
          completedTodoExist = {!!completedTodoCount}
          resetTodos={resetTodoHandler} 
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />)}
      <TodoList todos={todos} 
                deleteTodo={deleteTodoHandler} 
                toggleTodo={toggleTodoHandler} />
      {completedTodoCount > 0 && <h2>{`You have completed ${completedTodoCount} ${completedTodoCount > 1 ? 'todos' : 'todo' }`}</h2>}
    </div>
  ); 
}

export default App;
