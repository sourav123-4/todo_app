const initialData={
    list : []
}
export const todoReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO" :
            const {id,data}=action.payload
            return {
                ...state,
                list :[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "DELETE_TODO":
            const newList=state.list.filter(elem => elem.id !== action.payload)
            return{
                ...state,
                list:newList
            }  
        case "EDIT_TODO":
            const updateTodo = state.list.map((todo) => {
                if(todo.id == action.payload.id){
                    return {...todo,data:action.payload.data}
                }
                return todo
            })
            return {
                ...state,
                list:updateTodo
            }  
        default : 
            return state
    }
}