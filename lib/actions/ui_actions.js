export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_TODOCREATE_MODAL = "TOGGLE_TODOCREATE_MODAL";
export const TOGGLE_TODOEDIT_MODAL = "TOGGLE_TODOEDIT_MODAL";
export const OPEN_EDIT = "OPEN_EDIT";
export const TODO_FOCUS = "TODO_FOCUS";

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const toggleTodoCreateModal = () => ({
  type: TOGGLE_TODOCREATE_MODAL,
});

export const toggleTodoEditModal = (todo) => ({
  type: TOGGLE_TODOEDIT_MODAL,
  todo
});

export const openEdit = (todo) => ({
  type: OPEN_EDIT,
  todo
})

export const todoFocus = (todo) => ({
  type: TODO_FOCUS,
  todo
})