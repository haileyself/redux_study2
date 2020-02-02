import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch }) => {
  let input
  // input 변수는 input element에 reference를 hold할 것 
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()) {
          return 
        }
        // input 변수를 활용 
        dispatch(addTodo(input.value))
        input.value = ''
      }}
      // input value를 활용 
      >
       <input ref={node => input = node
        // input 변수에 node 참조를 할당  
        }/>
       <button type="submit">Add Todo</button> 
      </form>
    </div>
  )
}


export default connect()(AddTodo)
