import React from 'react'
import {nanoid} from 'nanoid' 

export const addTodo = (data) => {
  return {
      type : "ADD_TODO",
      payload : {
          id:nanoid(),
          data:data
      }
  }
}
export const DeleteTodo=(id)=>{
    return {
        type : "dELETE_TODO",
        payload:id
    }
}
export const EditTodo=(todo)=>{
    return {
        type : "EDIT_TODO",
        payload:todo
    }
}
