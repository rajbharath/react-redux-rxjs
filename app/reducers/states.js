import {
	FETCH_STATES,
	FETCH_STATES_SUCCESS,
	FETCH_STATES_FAILURE
} from '../actions/states';

const initialState = {
	states: [],
	isLoading: false,
	error: undefined
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_STATES:
			return { ...state, isLoading: true };
		case FETCH_STATES_SUCCESS:
			return { ...state, isLoading: false, states: action.payload.states };
		case FETCH_STATES_FAILURE:
			return { ...state, isLoading: false, error: action.message };
		default:
			return { ...state };
	}
};
