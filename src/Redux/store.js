import { legacy_createStore, combineReducers } from "redux";
import { countReducer } from "./counter/reducer";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: countReducer
});

export const store = legacy_createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store)
