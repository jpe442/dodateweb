export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'https://dodateweb.herokuapp.com/api/users/',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'https://dodateweb.herokuapp.com/api/session/',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'https://dodateweb.herokuapp.com/api/session',
  })
);

