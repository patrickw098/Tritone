import { connect } from 'react-redux';
import ErrorMessage from './error_message';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  message: state.errors.errorMessage
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorMessage));
