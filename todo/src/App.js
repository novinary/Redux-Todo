import React, { Component } from "react";
import "./App.css";
import createStore from "redux"


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDom.Render(
  <Provider>
    <Form />
    <ToDos />
  </Provider>
);

