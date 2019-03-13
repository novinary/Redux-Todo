import * as types from '../constants/actionTypes'

// REDUCER FUNCTIONS
export function addTodo (todoArray = [], action) {
    switch (action.type) {
      case types.ADD_TODO:
      return todoArray.concat(action.payload)
      default:
      return todoArray;
    }
  };
