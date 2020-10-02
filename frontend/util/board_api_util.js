
export const fetchBoards = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/boards/'
  })
};

export const fetchBoard = boardId => {
  return $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}`,
  })
};

export const createBoard = board => {
  return $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: {
      board
    },
    contentType: false,
    processData: false
  })
};

export const updateBoard = board => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/boards/${board.id}`,
    data: {
      pin
    }
  })
};

export const deleteBoard = boardId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}`
  })
};