import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { addTodo, toggleComplete } from "./actions";
import Form from "./Form";
import TodoList from "./TodoList";

class App extends Component {
  toggleComplete = id => {
    this.props.ToggleComplete(id);
  };

  render() {
    //  const { todos } = this.props;
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <Form
          addTodo={this.props.addTodo}
          todos={this.props.todos}
        />

        <TodoList
          todos={this.props.todos}
          toggleComplete={this.props.toggleComplete}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleComplete: id => dispatch(toggleComplete(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
