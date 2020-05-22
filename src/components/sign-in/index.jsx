import React, { Component } from 'react';
import FormInput from '../form-input';
import CustomButtom from '../custom-button';
import { signInWithGoogle } from '../../firebase/auth';
import './styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.setState({
      email: '', password: '',
    });
  }

  handleChange(evt) {
    const { value, name } = evt.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={() => this.handleSubmit()}>
          <FormInput
            label="Email"
            type="text"
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
          <div className="buttons">
            <CustomButtom type="submit">Submit form</CustomButtom>
            <CustomButtom theme="blue" type="button" onClick={signInWithGoogle}>Sign in with Google</CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
