export const updateProfile = user => (
  $.ajax({
    method: 'PATCH',
    url: '/api/users/${user.id}',
    data: {
      user
    }
  })
);

export const showProfile = user => (
  $.ajax({
    method: 'GET',
    url: '/api/users/${user.id}',
  })
);