import { LOGIN_USER, LOGOUT_USER } from '../actions/session_actions';

const initialState = {
  id: null
};

const sessionsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type){
      case LOGIN_USER:
        return Object.assign({}, {id: action.payload.user.id});
      case LOGOUT_USER:
        return initialState;
      default:
        return state;
  }
};

export default sessionsReducer;
