export const fetchBoards = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/boards`
  })
};

export const fetchBoard = boardId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}/pins`
  })
};

export const createBoard = board => {
  return $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  })
};

export const updateBoard = board => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/boards/${board_id}`
  })
};

export const deleteBoard = boardId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}`
  })
};

