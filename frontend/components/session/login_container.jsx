import { connect } from 'react-redux';
import { loginCurrentUser, clearErrors } from '../../actions/session_actions';
import LogInForm from './login_form';
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: "Log In!",
  welcomeMessage: ["Welcome back!", "We're so excited to see you again!", "Need an account?", "/signup", "Register"]
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(loginCurrentUser(userForm)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
