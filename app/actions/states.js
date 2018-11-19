export const FETCH_STATES = 'FETCH_STATES';
export const FETCH_STATES_SUCCESS = 'FETCH_STATES_SUCCESS';
export const FETCH_STATES_FAILURE = 'FETCH_STATES_FAILURE';

export const fetchStates = () => ({
	type: FETCH_STATES
});

export const fetchStatesSuccess = states => {
	return {
		type: FETCH_STATES_SUCCESS,
		payload: { states }
	};
};

export const fetchStatesFailure = () => {
	return {
		type: FETCH_STATES_FAILURE,
		message: 'Error in fetching states'
	};
};
