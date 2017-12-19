import * as TodoAPIUtil from '../util/todo_api_util'

// Action-type constants

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
// export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
// export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

// thunks 

export const fetchTodos = (userId) => dispatch => (
  TodoAPIUtil.fetchTodos(userId)
    .then(todos => (dispatch(receiveTodos(todos))))
);

export const fetchTodo = (userId, id) => dispatch => (
  TodoAPIUtil.fetchTodo(userId, id)
    .then(todo => (dispatch(receiveTodo(todo))))
)

export const createTodo = (userId, todo) => dispatch => (
  TodoAPIUtil.createTodo(userId, todo)
    .then(todo => (dispatch(receiveTodo(todo))))
);

export const deleteTodo = (userId, id) => dispatch => (
  TodoAPIUtil.deleteTodo(userId, id)
    .then(todo => (dispatch(removeTodo(id))))
);

export const updateTodo = (userId, todo) => dispatch => (
  TodoAPIUtil.updateTodo(userId, todo)
    .then(todo => (dispatch(receiveTodo(todo))))
);

// export const searchQuestions = (query) => dispatch => (
//   QuestionAPIUtil.searchQuestions(query)
//     .then(questions => (dispatch(receiveSearchResults(questions))))
// );

// internal action creators

const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
})

const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId
})

// const receiveSearchResults = (query) => ({
//   type: RECEIVE_SEARCH_RESULTS,
//   query
// })

// export const clearSearchResults = () => ({
//   type: CLEAR_SEARCH_RESULTS
// })

