import * as BoardPinAPIUtil from '../util/join_pins_boards_api_util';
import { receiveBoard } from './board_actions';

export const RECEIVE_BOARD_PIN = 'RECEIVE_BOARD_PIN';
export const REMOVE_BOARD_PIN = 'REMOVE_BOARD_PIN';

const receiveBoardPin = boardPin => ({
  type: RECEIVE_BOARD_PIN,
  boardPin
});

const removeBoardPin = boardPin => ({
  type: REMOVE_BOARD_PIN,
  boardPin
});

export const pinToBoard = boardPin => dispatch => {
  return BoardPinAPIUtil.pinToBoard(boardPin)
  .then(board => dispatch(receiveBoard(board))
  )
};

export const deletePinOnBoard = boardPin => dispatch => {
  return BoardPinAPIUtil.deletePinOnBoard(boardPin)
    .then(board => dispatch(receiveBoard(board)))
};


