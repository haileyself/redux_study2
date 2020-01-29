import { VisibilityFilters } from '../actions';

const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
  case 'SET_VISIBLITY_FILTER' :
      return action.filter
    default:
      return state;  
      }
 }

 export default VisibilityFilter;
