import * as types from './components/constants/actionTypes'

// REDUCER FUNCTIONS
function addTodo (todoArray = [], action) {
    switch (action.type) {
      case types.ADD_TODO:
      return todoArray.concat(action.payload)
      default:
      return todoArray;
    }
  };