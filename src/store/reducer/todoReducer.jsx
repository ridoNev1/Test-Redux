const initialState = {
  data: null,
  isLoading: false,
  error: null,
  status: null,
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_MOC_TODO_PENDING":
      return { ...state, error: undefined, isLoading: true };
    case "GET_MOC_TODO_SUCCESS":
      return {
        ...state,
        data: payload.data,
        status: payload.status,
        isLoading: false,
      };
    case "GET_MOC_TODO_ERROR":
      return {
        ...state,
        error: payload.error,
        status: payload.status,
        isLoading: false,
      };
    case "CREATE_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          "Todo List": [
            ...state.data["Todo List"],
            {
              ...payload.payload,
              id:
                parseInt(state.data["Todo List"].length) +
                parseInt(state.data.Complete.length),
            },
          ].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
        },
        status: payload.status,
        isLoading: false,
      };
    case "DELETE_TODO":
      const data = {
        "Todo List": state.data["Todo List"]
          .filter((el) => el.id !== payload)
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
        Complete: state.data.Complete.filter((el) => el.id !== payload).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };
      return {
        ...state,
        data: data,
        status: payload.status,
        isLoading: false,
      };
    case "EDIT_TODO":
      const filteredTodo = state.data[
        payload.data.status === 0 ? "Todo List" : "Complete"
      ].filter((el) => el.id !== payload.id);

      return payload.data.status === 0
        ? {
            ...state,
            data: {
              ...state.data,
              "Todo List": [...filteredTodo, payload.data].sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
              ),
            },
            status: payload.status,
            isLoading: false,
          }
        : {
            ...state,
            data: {
              ...state.data,
              Complete: [...filteredTodo, payload.data].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              ),
            },
            status: payload.status,
            isLoading: false,
          };

    default:
      return initialState;
  }
};

export default todoReducer;
