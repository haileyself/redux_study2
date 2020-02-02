import { VisibilityFilters } from '../actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
  case 'SET_VISIBLITY_FILTER' :
      return action.filter
    default:
      return state;  
      }
 }

 export default visibilityFilter;

 //state default값으로  'SHOW_ALL'을 줌 
//action type이 'SET_VISIBLITY_FILTER 이면, action.filter 를 리턴 