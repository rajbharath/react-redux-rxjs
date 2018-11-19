import { connect } from 'react-redux';
import States from '../components/States.jsx';
import { fetchStates } from '../actions/states';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
	const { states } = state;
	const { states: statesList, isLoading, error } = states;
	return {
		states: statesList,
		isLoading,
		error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchStates: () => dispatch(fetchStates())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(States);
