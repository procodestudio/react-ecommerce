import React, { Component } from 'react';
import FormInput from '../form-input';
import CustomButtom from '../custom-button';
import { auth } from '../../firebase/auth';
import { createUserProfileDocument } from '../../firebase/actions';
import './styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.state = this.initialState;
  }

  async handleSubmit(evt) {
    const {
      displayName, email, password, confirmPassword,
    } = this.state;

    evt.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({ ...this.initialState });
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange(evt) {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      displayName, email, password, confirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={(evt) => this.handleSubmit(evt)}>
          <FormInput
            label="Display name"
            type="text"
            id="displayName"
            required
            value={displayName}
            handleChange={(evt) => this.handleChange(evt)}
          />
          <FormInput
            label="Email"
            type="email"
            id="email"
            required
            value={email}
            handleChange={(evt) => this.handleChange(evt)}
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            required
            value={password}
            handleChange={(evt) => this.handleChange(evt)}
          />
          <FormInput
            label="Confirm password"
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            handleChange={(evt) => this.handleChange(evt)}
          />
          <div className="buttons">
            <CustomButtom type="submit">SIGN UP</CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {};

export default SignUp;
