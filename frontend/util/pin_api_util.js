export const fetchPins = () => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/pins/'
  })
};

export const fetchUserPin = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/pins`
  })
};

export const fetchPin = pinId => {
  return $.ajax({
    method: 'GET',
    url: `/api/pins/${pinId}/pins`
  })
};

export const fetchBoardPins = boardId => {
  return $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/pins`
  })
};

export const createPin = pin => {
  return $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: { pin },
    contentType: false,
    processData: false
  })
};

export const updatePin = pin => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: {pin}
  })
};

export const deletePin = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pins/${id}`
  })
};