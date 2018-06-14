import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateServerContainer from './create_server_container';
import EditChannelContainer from './edit_channel_container';
import EditServerContainer from './edit_server_container';
import ErrorMessageContainer from './error_message_container';
import UserSearchContainer from '../dms/user_search_container';
import EditProfileContainer from './edit_profile_container';

const Modal = ( { modal, closeModal } ) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'createServer':
      component = <CreateServerContainer />
      break;
    case 'editChannel':
      component = <EditChannelContainer />
      break;
    case 'editServer':
      component = <EditServerContainer />
      break;
    case 'errorMessage':
      component = <ErrorMessageContainer />
      break;
    case 'searchUsers':
      component = <UserSearchContainer />
      break;
    case 'openProfile':
      component = <EditProfileContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
