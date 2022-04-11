import React from 'react';

const TodosList = ({todo, todos, setTodos, setEditTodo}) => {

 const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
};

const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
};

    return (
        <div>
          {todos.map((todo) => (
               <div className='list-item' key={todo.id}>
                   <input type='text' 
                   value={todo.title} 
                   className='list' 
                   onChange ={(e) => e.preventDefault()}
                   />
                   <button className='btn-edit' onClick={() => handleEdit(todo.id)}>Edit</button>
                   <button className='btn-delete' onClick={() => handleDelete(todo.id)}>Delete</button>
               </div>
          ))}
        </div>
    )
}
export default TodosList;