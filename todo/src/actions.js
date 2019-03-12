import { ADD_TODO, TOGGLE_COMPLETE } from './constants.js'

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export const toggleComplete = id => ({
    type: TOGGLE_COMPLETE,
    payload: id
});