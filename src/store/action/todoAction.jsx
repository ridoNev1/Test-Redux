export const mocTodoGetAllPending = () => ({
  type: "GET_MOC_TODO_PENDING",
});
export const mocTodoGetAllSuccess = (payload) => {
  const data = {
    "Todo List": payload.data
      .filter((el) => el.status === 0)
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    Complete: payload.data
      .filter((el) => el.status === 1)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  };
  return {
    type: "GET_MOC_TODO_SUCCESS",
    payload: {
      status: payload.status,
      data: data,
    },
  };
};
export const mocTodoGetAllError = (error) => ({
  type: "GET_MOC_TODO_ERROR",
  payload: {
    error,
  },
});

export const todoCreate = (payload) => {
  return {
    type: "CREATE_TODO",
    payload: {
      payload: {
        ...payload,
        status: 0,
        createdAt: new Date(),
      },
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const editTodo = (payload) => {
  return {
    type: "EDIT_TODO",
    payload,
  };
};
