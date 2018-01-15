export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const TOGGLE_TODOCREATE_MODAL = "TOGGLE_TODOCREATE_MODAL";
export const TOGGLE_TODOEDIT_MODAL = "TOGGLE_TODOEDIT_MODAL";

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const toggleTodoCreateModal = () => ({
  type: TOGGLE_TODOCREATE_MODAL,
});

export const toggleTodoEditModal = () => ({
  type: TOGGLE_TODOEDIT_MODAL,
})