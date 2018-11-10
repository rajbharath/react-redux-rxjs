import { DECREASE_COUNTER, INCREASE_COUNTER } from '../actions/counter';
const initialState = {
  counter: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return { ...state };
  }
};