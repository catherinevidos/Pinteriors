import {
  connect
} from 'react-redux';

import {
  fetchPin
} from '../../actions/pin_actions';

import PinShow from './pin_show';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  pins: Object.values(state.entities.pins),
  pin: state.entities.pins[ownProps.match.params.pinId]
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchPin: (pinId) => dispatch(fetchPin(pinId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);