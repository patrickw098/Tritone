import { LOGIN_USER } from '../actions/session_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case LOGIN_USER:
        return Object.assign({}, state, { [action.user.id]: action.user });
      default:
        return state;
  }
};

export default usersReducer;
