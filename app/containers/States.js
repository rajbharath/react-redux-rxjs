import { connect } from 'react-redux';
import States from '../components/States.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    states: state.states,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(States);