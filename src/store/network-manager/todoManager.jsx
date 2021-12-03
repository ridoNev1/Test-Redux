import {
  mocTodoGetAllError,
  mocTodoGetAllPending,
  mocTodoGetAllSuccess,
  todoCreate,
  deleteTodo,
  editTodo,
} from "../action/todoAction";
import axios from "axios";

export const mocTodoGetAll = (callback) => {
  return async (dispatch) => {
    try {
      dispatch(mocTodoGetAllPending());
      const response = await axios.get(
        `https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`
      );
      dispatch(mocTodoGetAllSuccess(response));
      callback?.(response?.data);
    } catch (e) {
      dispatch(mocTodoGetAllError(e));
    }
  };
};

export const createTodo = (data) => {
  return async (dispatch) => {
    dispatch(todoCreate(data));
  };
};

export const handleDeleteTodo = (id) => {
  return async (dispatch) => {
    dispatch(deleteTodo(id));
  };
};

export const handleEditTodo = (id, data, isSwitch) => {
  return async (dispatch) => {
    dispatch(editTodo({ id, data, isSwitch }));
  };
};
