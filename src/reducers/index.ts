import { combineReducers } from "redux";
import { ToDoObject } from "../actions";
import { todosReducer } from "./todos";

export interface StoreState {
  todos: ToDoObject[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
