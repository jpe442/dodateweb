export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'https://dodateweb.herokuapp.com/api/users/',
    // url: 'http://localhost:3000/api/users/',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'https://dodateweb.herokuapp.com/api/session/',
    // url: 'http://localhost:3000/api/session/',
    data: { user },
    xhrFields: { withCredentials: true }

  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'https://dodateweb.herokuapp.com/api/session/',
    // url: 'http://localhost:3000/api/session/',
    xhrFields: { withCredentials: true }
  })
);

// 2017 - 12 - 29T04: 32: 14.373477 + 00: 00 heroku[router]: at = info method = DELETE path = "/api/session/" host = dodateweb.herokuapp.com request_id = 2affbde0 - 59d2 - 4574 - 942c - 5fd8c2b1c5a0 fwd = "99.47.68.230" dyno = web.1 connect = 0ms service = 4ms status = 401 bytes = 532 protocol = https