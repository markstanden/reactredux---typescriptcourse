import { FetchToDosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchToDosAction | DeleteTodoAction;
