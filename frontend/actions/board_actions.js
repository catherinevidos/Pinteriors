import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchBoard = boardId => dispatch => {
  return BoardAPIUtil.fetchBoard(boardId)
    .then(board => dispatch(receiveBoard(board)))
}

export const fetchBoards = () => dispatch => {
  return BoardAPIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards)))
}

export const deleteBoard = (boardId) => dispatch => {
  return BoardAPIUtil.deleteBoard(boardId)
    .then(board => dispatch(removeBoard(board.id)))
}

export const updateBoard = (board) => dispatch => {
  return BoardAPIUtil.updateBoard(board)
    .then(board => dispatch(receiveBoard(board)))
}

export const createBoard = board => dispatch => (
    BoardAPIUtil.createBoard(board).then(board => (dispatch(receiveBoard(board))
    ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);