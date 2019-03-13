import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>To Do List:</p>
        </header>
        <div>
          <label>Add To Do</label>
          <input type="text" value="test" />
        </div>
        <div className="todo-app container">

        </div>
      </div>
    );
  }
}

export default App;
