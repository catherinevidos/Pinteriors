import {
  connect
} from 'react-redux';

import {
  fetchPin
} from '../../actions/pin_actions';

import {
  openModal
} from '../../actions/modal_actions';

import UserProfile from './user_profile';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(
  null, null
)(UserProfile);