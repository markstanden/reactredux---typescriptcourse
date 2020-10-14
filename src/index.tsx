import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

/** Functional Components return JSX.Element as below, otherwise similar */
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div>
        How many would you like?
        <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> - </button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
