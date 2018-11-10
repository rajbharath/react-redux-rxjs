import React from 'react';
class App extends React.Component {
  render() {
    const {
      counter,
      decrease,
      increase
    } = this.props;
    return <div>Counter: <span>{counter}</span><button onClick={decrease}>Decrease</button><button onClick={increase}>Increase</button></div>;
  }
}
export default App;
