import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_FOOTER, TOGGLE_FRIENDS, RESET_FRIENDS } from '../actions/modal_actions';

const initialState = {
  modal: null,
  footer: false,
  friends: true
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { modal: action.modal });
    case CLOSE_MODAL:
      return initialState;
    case TOGGLE_FOOTER:
      if ( state.footer ) {
        return Object.assign({}, state, { footer: false });
      } else {
        return Object.assign({}, state, { footer: true });
      }
    case TOGGLE_FRIENDS:
      if ( state.friends ) {
        return Object.assign({}, state, { friends: false });
      } else {
        return Object.assign({}, state, { friends: true });
      }
    case RESET_FRIENDS:
      return Object.assign({}, state, { friends: true });
    default:
      return state;
  }
}

export default uiReducer;
