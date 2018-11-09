import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increase() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  decrease() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  render() {
    return <div>Counter: <span>{this.state.counter}</span><button onClick={() => this.decrease()}>Decrease</button><button onClick={() => this.increase
      ()}>Increase</button></div>;
  }
}
export default App;
