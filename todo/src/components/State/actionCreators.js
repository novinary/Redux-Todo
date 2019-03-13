import * as types from '../constants/actionTypes';

export function addTodo(todo) {
    return {
        type: types.ADD_TODO,
        payload: todo
    };
}

export function todos(todo) {
    return {
        type: types.TODOS,
        payload: todo
    };
}