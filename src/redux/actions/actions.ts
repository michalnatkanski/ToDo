import {ADD_TODO, REMOVE_TODO} from './actionTypes';

export const AddTodo = (payload: any) => ({
  type: ADD_TODO,
  payload,
});

export const RemoveTodo = (payload: any) => ({
  type: REMOVE_TODO,
  payload,
});
