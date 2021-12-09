import React from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup(){  

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(function(){
      alert("successfully signed up!");
    }).catch(function(error) {
      alert(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

    </React.Fragment>
  );
}

export default Signup;