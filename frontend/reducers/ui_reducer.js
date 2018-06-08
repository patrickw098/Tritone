import { OPEN_MODAL, CLOSE_MODAL, OPEN_FOOTER, CLOSE_FOOTER, TOGGLE_FOOTER } from '../actions/modal_actions';

const initialState = {
  modal: null,
  footer: false
}

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { modal: action.modal });
    case CLOSE_MODAL:
      return initialState;
    case OPEN_FOOTER:
      return Object.assign({}, state, { footer: action.footer });
    case CLOSE_FOOTER:
        return initialState;
    case TOGGLE_FOOTER:
      if ( state.footer ) {
        return Object.assign({}, state, { footer: false });
      } else {
        return Object.assign({}, state, { footer: true });
      }
    default:
      return state;
  }
}

export default uiReducer;
