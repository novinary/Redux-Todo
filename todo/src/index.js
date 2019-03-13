import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'; //import createStore function from redux
import { Provider } from 'react-redux'; //import Provider Component to make App component aware of store
import todos from "./reducers";

const store = createStore(todos); //createStore function receives reducer responsible for updating the store, along with any initial stat

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));
