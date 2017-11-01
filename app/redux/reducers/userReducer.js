import * as types from '../actions/actionTypes';
//import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function users(state = [], action) {
  switch (action.type) {
    case types.LOAD_USERS:
      return action.users;

    case "CREATE_USER":
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    case "UPDATE_USER":
      if (typeof action.user.id !== "undefined") {
        return [
          ...state.filter(user => user.id != action.user.id),
          Object.assign({}, action.user)
        ];
      } else {
        return [...state];
      }

    case "DELETE_USER":
      return [
        ...state.filter(user => user.id != action.userId)
      ];

    default:
      return state;
  }
}
