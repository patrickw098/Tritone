import { connect } from 'react-redux';
import DmMessage from './dm_message';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, null)(DmMessage))
