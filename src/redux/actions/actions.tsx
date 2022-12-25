import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export const AddTodo = (payload: string) => ({
  type: ADD_TODO,
  payload,
});

export const RemoveTodo = (payload: string) => ({
  type: REMOVE_TODO,
  payload,
});
