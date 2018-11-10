import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../actions/counter';
import App from '../components/App.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseCounter),
    decrease: () => dispatch(decreaseCounter),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);