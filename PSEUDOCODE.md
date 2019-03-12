Step 1
Initialize Project
- Run create-react-app todo to create your starter application - Done
- Now that you have created your todo directory, cd into it. - Done
- yarn add redux react-redux - Done

Step 2
Work on the general flow 
- create action called ADD_TODO and TOGGLE_COMPLETE in actions.js file - Done
- create constant called ADD_TODO and TOGGLE_COMPLETE in constants.js file - Done
- import ADD_TODO and TOGGLE_COMPLETE constant variables into actions.js and use the constant instead of text - Done
- create reducers - Done
- create store in index.js - Done
- add the connect and create blank mapToState and mapDispatchToProps functions in App.js - Done
- return todos objects for mapToState, work on map DispatchToprops later - Done
- Work on a form by creating three relative components Form, TodoItems and TodoList - Done



Validations
When you add a new item to the todo array an action containing the new todo 
object will be dispatched through all of the reducers.

Step 3
Display the todo list
- create a container that receives the todos array as a prop 
- and then uses map to display it as an unordered list.