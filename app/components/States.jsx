import React from 'react';

export default class States extends React.Component {
	componentDidMount() {
		const { fetchStates } = this.props;
		fetchStates();
	}

	render() {
		const { states, isLoading, error } = this.props;
		return (
			<div>
				{'states list:'}
				{isLoading && 'States are being fetched. Please wait...'}
				{!!error && error}
				{states.length > 0 && (
					<ol>
						{states.map(s => (
							<li>{s}</li>
						))}
					</ol>
				)}
			</div>
		);
	}
}
