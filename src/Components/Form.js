import React  from 'react';
import {nanoid} from 'nanoid'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo 
        );
        setTodos(newTodo);
        setEditTodo('');
    };
    React.useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    }, [setInput, editTodo]);

  const onInputChange = (e) => {
      setInput(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodo){
    setTodos([...todos, {id:nanoid(), title: input}]);
    setInput("");
    }
    else{
        updateTodo(input, editTodo.id , editTodo.completed)
    }
}
  
    return (
    <form onSubmit={onFormSubmit}>
        <input type='test' 
        placeholder='Enter a Todo...' 
        className='text-input' 
        value={input}
        required
        onChange={onInputChange}
        />
        <button className='button-add' type='submit'>
            {editTodo ? "OK" : "ADD"}
        </button>
    </form>
  )
}

export default Form; 