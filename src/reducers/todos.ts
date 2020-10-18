import { ToDoObject, Action, ActionTypes } from "../actions";

export const todosReducer = (state: ToDoObject[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: ToDoObject) => todo.id !== action.payload);
    default:
      return state;
  }
};
