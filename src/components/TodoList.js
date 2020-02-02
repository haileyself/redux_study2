import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo=> (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

//todos는 reducer
//case에  따라 새로운 state값 return 
// Todo 컴포넌트에 todos 수만큼 key값주고, onclick이벤트 일어날 시, toggleTodo action creator 호출
// 해당 값 호출되면 toogle_todo type return

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

// PropTypes.arrayOf() : 특정 타입을 가진 array 
// PropTypes.shape({}) : 특정 모양을 가진 object 
//  여기서는 id , completed, text를 key로 가진 object !
export default TodoList;
