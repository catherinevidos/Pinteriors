import {
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  REMOVE_BOARD
} from '../actions/pin_actions';

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, state, {
        [action.board.id]: action.board
      })
    case RECEIVE_BOARDS:
      return Object.assign({}, state, action.boards)
    case REMOVE_PIN:
      let newState = Object.assign({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
}

export default BoardReducer;