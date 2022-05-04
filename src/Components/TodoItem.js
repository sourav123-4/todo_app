import React,{useState} from 'react';
import '../App.css'
import { useSelector,useDispatch } from 'react-redux';
import { EditTodo,DeleteTodo } from '../actions/index';
const TodoItem = ({todo}) => {
    const [editTodo,setEditTodo]=React.useState(todo.data)
    const [isEditing,setIsEditing]=React.useState(false)
    const dispatch=useDispatch()
    console.log(todo.data)
    return (
        <div>
               <div className='list-item'>
                   {isEditing?
                   <input type='text' 
                   value={editTodo} 
                   className='list' 
                   onChange ={(e) => {
                    setEditTodo(e.target.value)}
                   }
                   />
                   :<h4>{todo.data}</h4>}
                   <button className='btn-edit' 
                        onClick={()=>{
                            dispatch(EditTodo({
                                ...todo,
                                data:editTodo
                            }))
                            if(isEditing){
                                setEditTodo(todo.data)
                            }
                            setIsEditing(!isEditing)
                            }}>{isEditing?"UPDATE" : "EDIT"}</button>
                   <button className='btn-delete' onClick={()=>dispatch(DeleteTodo(todo.id))}>Delete</button>
               </div>
            
              
        </div>
    )
}
export default TodoItem;