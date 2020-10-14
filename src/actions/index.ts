import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface ToDoObject {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

export  interface FetchToDosAction {
  type: ActionTypes.fetchTodos;
  payload: ToDoObject[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDoObject[]>(url);

    dispatch<FetchToDosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
