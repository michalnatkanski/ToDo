import { ADD_TODO, REMOVE_TODO } from '../actions/actionTypes';

interface action {
  type: string;
  payload: string;
}

const INITIAL_STATE = {
  taskItems: [],
};

const todoReducer = (state = INITIAL_STATE.taskItems, action: action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return [...handleRemoveTodo(action.payload, state)];
    default:
      return state;
  }
};

const handleRemoveTodo = (item: string, taskItems: Array<string>) => {
  const todoIndex = taskItems.indexOf(item);
  taskItems.splice(todoIndex, 1);
  return taskItems;
};

export default todoReducer;
