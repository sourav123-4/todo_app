import React  from 'react';
import { useDispatch} from 'react-redux'
import { addTodo} from '../actions/index';
const Form = () => {
    const [input,setInput]=React.useState("")
    const dispatch=useDispatch()
    return (
    <div>
        <input type='test' 
        placeholder='Enter a Todo...' 
        className='text-input' 
        value={input}
        onChange={e => setInput(e.target.value)}
        />
        <button className='button-add' onClick={()=>dispatch(addTodo(input),setInput(''))}>
            ADD
        </button>
    </div>
  )
}

export default Form; 