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