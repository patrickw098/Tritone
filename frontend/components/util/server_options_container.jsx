import { connect } from 'react-redux';
import ServerOptions from './server_options';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  server: ownProps.match.params.serverId
})

const mapDispatchToProps = dispatch => ({
  updateServer: (server) => dispatch(updateServer))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerOptions));
