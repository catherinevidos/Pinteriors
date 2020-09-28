// data: { info }
// #info will point to pin_id and board_id, info will come from the react presentational component. pin index should be informed by what board we're on 

export const pinToBoard = (boardPin) => {
  return $.ajax({
    method: 'POST',
    url: '/api/joinspinsboards',
    data: { boardPin },
    contentType: false,
    processData: false
  })
};

export const deletePinOnBoard = (boardPin) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/joinspinsboards/4',
    data: { boardPin }
  })
};

// #have the delete pin board, pass in null as the ID. and then boardpin id will be an objext that has a boardid and a pinid 