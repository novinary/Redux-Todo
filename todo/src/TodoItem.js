import React from "react";

const TodoItem = props => {
    return (
        < div onClick={() => props.toggleComplete(props.todo.id)
        }>
        {props.todo.value}
        </ div>
    );
};

export default TodoItem;