import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateServerContainer from './create_server_container.jsx';

const Modal = ( { modal, closeModal } ) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'createServer':
      component = <CreateServerContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
