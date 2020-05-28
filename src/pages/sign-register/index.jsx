import React from 'react';
import SignIn from '../../components/sign-in';
import './styles.scss';
import SignUp from '../../components/sign-up';

const SignRegister = () => (
  <div className="sign-register">
    <SignIn />
    <SignUp />
  </div>
);

export default SignRegister;
