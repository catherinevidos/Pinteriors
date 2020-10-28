import {
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  REMOVE_BOARD
} from '../actions/board_actions';
import {RECEIVE_BOARD_PIN} from '../actions/join_pins_boards_actions';

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOARD:
      return Object.assign({}, state, {
        [action.board.id]: action.board
      })
    case RECEIVE_BOARDS:
      return Object.assign({}, state, action.boards)
    case REMOVE_BOARD:
      let newState = Object.assign({}, state);
      delete newState[action.boardId];
      return newState;
    case RECEIVE_BOARD_PIN:
      return Object.assign({}, state, action.board)
    default:
      return state;
  }
}

export default BoardReducer;