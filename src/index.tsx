import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color} Hello World </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
