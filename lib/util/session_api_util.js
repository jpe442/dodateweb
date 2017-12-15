export const signup = user => (
  $.ajax({
    method: 'POST',
    // url: 'https://dodateweb.herokuapp.com/api/users/',
    url: 'http://localhost:3000/api/users/',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    // url: 'https://dodateweb.herokuapp.com/api/session/',
    url: 'http://localhost:3000/api/session/',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    // url: 'https://dodateweb.herokuapp.com/api/session',
    url: 'http://localhost:3000/api/session',
  })
);

