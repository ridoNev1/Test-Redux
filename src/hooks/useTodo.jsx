import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  mocTodoGetAll,
  createTodo,
  handleDeleteTodo,
  handleEditTodo,
} from "../store/network-manager/todoManager";

const useTodo = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.mocTodo);

  const handleGetAll = useCallback(
    (callback) => {
      dispatch(mocTodoGetAll(callback));
    },
    [dispatch]
  );

  const HandleCreateTodo = useCallback(
    (data) => {
      dispatch(createTodo(data));
    },
    [dispatch]
  );

  const deleteOneTodo = useCallback(
    (id) => {
      dispatch(handleDeleteTodo(id));
    },
    [dispatch]
  );

  const editOneTodo = useCallback(
    (id, data, isSwitch) => {
      dispatch(handleEditTodo(id, data, isSwitch));
    },
    [dispatch]
  );

  return {
    todoState,
    mocTodoGetAll: handleGetAll,
    createNewTodo: HandleCreateTodo,
    deleteTodo: deleteOneTodo,
    editTodo: editOneTodo,
  };
};

export default useTodo;
