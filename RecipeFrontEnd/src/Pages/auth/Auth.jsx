import React from 'react'
import "./Auth.css"
import SignIn from "../../components/signIn/SignIn"
import SignUp from "../../components/signUp/SignUp"
import { useState } from 'react';

function Auth() {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className='authCon'>
{showSignIn ? <SignIn toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
    </div>
  );
}

export default Auth