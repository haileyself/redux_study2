import {combineReducers} from 'redux';
import todos from './todos';
import visiblityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visiblityFilter
});

// todos만 쓴 이유는 es6 비구조화할당
// todos : todos (todos가 key, value값 다 되서 )