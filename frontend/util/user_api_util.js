export const updateUser = (user, id) => (
  $.ajax({
    method: 'PATCH',
    url:  `/api/users/${id}`,
    data: user,
    contentType: false,
    processData: false
  })
);

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

