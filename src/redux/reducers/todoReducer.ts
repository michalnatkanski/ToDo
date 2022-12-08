import {ADD_TODO, REMOVE_TODO} from '../actions/actionTypes';

const INITIAL_STATE = {
  taskItems: ['make a dinner', 'go to the store', 'go to the gym'],
};

const todoReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {taskItems: [...state.taskItems, action.payload]};
    case REMOVE_TODO:
      return {taskItems: handleRemoveTodo(action.payload, state.taskItems)};
    default:
      return state;
  }
};

const handleRemoveTodo = (item: any, taskItems: any) => {
  const todoIndex = taskItems.indexOf(item);

  taskItems.splice(todoIndex, 1);

  return taskItems;
};

export default todoReducer;
