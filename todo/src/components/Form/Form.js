import React from "react";
import { bindActionCreators } from "redux"; //Turns an object whose values are action creators
import { connect } from "react-redux";
import { addTodo } from "../State/actionCreators";

export default class Form extends React.Component {
  todoRef = React.createRef();

  onAddTodo = (todo) => {
    // 3- implement so it uses this.props.addTodo
    // and also clears the inputs
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
    const todo = this.todoRef.current.value;

    this.props.addTodo(todo);
    this.todoRef.currentvalue = '';
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>To Do List:</p>
        </header>
        <div>
          <label>Add To Do</label>
          <input ref={this.todoRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddTodo}>Add To Do</button>
        </div>
        <div className="todo-app container" />
      </div>
    );
  }
}

