export const signupUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user
    }
  })
);

export const loginUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user
    }
  })
);

export const logoutUser = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const demoUser = () => {
  return $.ajax ({
    method: 'POST',
    url: '/api/session',
    data: {
      user: {
        email: 'pinteriors@catherine.com',
        password: 'welcome1'
      }
    }
  });
}