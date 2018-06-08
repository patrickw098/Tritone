import { connect } from 'react-redux';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId]
})

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
