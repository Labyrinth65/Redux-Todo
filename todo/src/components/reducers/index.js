import { combineReducers } from "redux";
import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from "../actions";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			];
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					});
				}
				return todo;
			});
		case DELETE_TODO:
			// return (state = state
			// 	.slice(0, action.index)
			// 	.concat(state.slice(action.index + 1)));
			return (state = state.filter((todo, index) => index !== action.index));
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;
