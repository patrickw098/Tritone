import { connect } from 'react-redux';
import Footer from './footer';
import { toggleFooter } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    dropdown: state.ui.footer
  }
}

const mapDispatchToProps = dispatch => ({
  toggleFooter: () => dispatch(toggleFooter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
