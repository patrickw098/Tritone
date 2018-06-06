import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const initialState = {
  modal: null
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { modal: action.modal })
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default uiReducer;
