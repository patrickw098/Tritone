import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import SignUpForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: "Sign Up!",
  welcomeMessage: ["Create an account", "We're excited you are joining us!", "Already have an account?", "/login", "Login"]
});

const mapDispatchToProps = dispatch => ({
  submitForm: (userForm) => dispatch(createUser(userForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
