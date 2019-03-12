import { ADD_TODO } from './constants.js'
import { TOGGLE_COMPLETE } from './constants.js'

const initialState = {
    todos: [
        {
            id: 1,
            value: "Wake up",
            completed: false
        },
        {
            id: 2,
            value: "Make breakfast",
            completed: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: action.payload, completed: false };

        case TOGGLE_COMPLETE:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    } else return todo;
                })
            };

        default:
            return state;
    }

}


