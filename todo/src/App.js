import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import { createStore, combineReducers } from "redux";
import Form from "./components/Form";
import ToDos from "./components/ToDos";
import { Provider } from "react-redux";
import { addTodo, todo, completed } from "./state.reducers";

const rootReducer = combineReducers({
  todo,
  addTodo,
  completed,
 });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>>
    <Form />
    <ToDos />
  </Provider>,
   document.querySelector("#target")
);
