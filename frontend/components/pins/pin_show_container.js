// import {
//   connect
// } from 'react-redux';

// import {
//   openModal
// } from '../../actions/modal_actions';

// import {
//   fetchPins
// } from '../../actions/pin_actions';

// import PinIndex from './pin_index';


// const mapStateToProps = ({
//   session,
//   entities
// }) => ({
//   currentUser: session && session.id && entities.users[session.id],
//   pins: Object.values(entities.pins)
// });

// const mapDispatchToProps = dispatch => ({
//   openModal: modal => dispatch(openModal(modal)),
//   fetchPins: () => dispatch(fetchPins())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PinIndex);