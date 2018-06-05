import { connect } from 'react-redux';
import Loading from './loading';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  userId: state.session.id
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Loading));
