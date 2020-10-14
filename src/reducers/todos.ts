import { ToDoObject, FetchToDosAction } from "../actions";
import { ActionTypes } from "../actions/types";

export const todosReducer = (
  state: ToDoObject[] = [],
  action: FetchToDosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
