import { ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";

const INITIAL_STATE = {taskItems: []};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {taskItems: [...state.taskItems, action.payload]};
        case REMOVE_TODO:
            return {taskItems: handleRemoveTodo(action.payload, state.taskItems)};
        default:
            return state;
    }
}

const handleRemoveTodo = (item, taskItems) => {
    const todoIndex = taskItems.indexOf(item);

    taskItems.splice(todoIndex, 1);

    return taskItems
}

export default todoReducer;