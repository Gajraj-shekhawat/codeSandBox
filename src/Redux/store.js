import { legacy_createStore, combineReducers } from "redux";
import { countReducer } from "./counter/reducer";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: countReducer
});

export const store = legacy_createStore(rootReducer);

// console.log(store)
