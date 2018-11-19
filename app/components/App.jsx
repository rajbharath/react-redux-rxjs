import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
	render() {
		const { counter, decrease, increase } = this.props;
		return (
			<div>
				<Link to={'/states'}>States</Link>
				Counter: <span>{counter}</span>
				<button onClick={decrease}>Decrease</button>
				<button onClick={increase}>Increase</button>
			</div>
		);
	}
}
export default App;
