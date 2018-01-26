export const fetchTodos = (userId) => (
  $.ajax({
    method: 'GET',
    // url: `http://localhost:3000/api/users/${userId}/todos`,
    url: `https://dodateweb.herokuapp.com/api/users/${userId}/todos`,

  })
);

export const fetchTodo = (userId, id) => (
  $.ajax({
    method: 'GET',
    // url: `http://localhost:3000/api/users/${userId}/todos/${id}`,
    url: `https://dodateweb.herokuapp.com/api/users/${userId}/todos/${id}`,

  })
)

export const createTodo = (userId, todo) => (
  $.ajax({
    method: 'POST',
    // url: `http://localhost:3000/api/users/${userId}/todos`,
    url: `https://dodateweb.herokuapp.com/api/users/${userId}/todos`,

    data: {todo}
  })
)

export const deleteTodo = (userId, id) => (
  $.ajax({
    method: 'DELETE',
    url: `https://dodateweb.herokuapp.com/api/users/${userId}/todos/${id}`,
    // url: `http://localhost:3000/api/users/${userId}/todos/${id}`,
  })
)

export const updateTodo = (userId, todo) => (
  $.ajax({
    method: 'PATCH',
    // url: `http://localhost:3000/api/users/${userId}/todos/${todo.id}`,
    url: `https://dodateweb.herokuapp.com/api/users/${userId}/todos/${todo.id}`,

    data: { todo }
  })
);


// Below is the header format for posting events to Google Calendar API -- SAVE UNTIL NEXT STAGE DOCUMENTATION

// POST / calendar / v3 / calendars / p12khlt68r2iiadu686bnujc4g@group.calendar.google.com/events/ HTTP / 1.1
// Host: www.googleapis.com
// Content - length: 123
// Content - type: application / json
// Authorization: Bearer ya29.GltIBS6jUSjyFlUPLBIg_CUqQhR4zn8H2wpWMpzBxhgJdyMs_60HqFqTnTnBPD2pZFoJ9pHRbFx7axX - oybYmFqtmrXpYy5mfEyc6VZyUx2wFRROvlHNUtQraU9F
// { "end": { "dateTime": "2018-01-15T07:45:00-08:00" }, "start": { "dateTime": "2018-01-15T06:45:00-08:00" }, "summary": "ballin" }