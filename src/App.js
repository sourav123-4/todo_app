import React from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import TodoList from './Components/TodoList';
function App() {
  const [input,setInput]=React.useState("")
  const [todos,setTodos]=React.useState([])
  const [editTodo , setEditTodo] =React.useState(null);
  return (
    <div className="App">
      <Header/>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}/>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
