import React from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import TodoList from './Components/TodoList';
function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
