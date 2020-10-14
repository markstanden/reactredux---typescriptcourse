import React from "react";

import { connect } from "react-redux";
import { ToDoObject, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ToDoObject[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.todos);
    return <div>Hello old bean</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: ToDoObject[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
