import React from "react";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useHistory} from "react-router-dom";


function Signin(){  

  let history = useHistory();

  function doSignIn(event) {
    event.preventDefault();
    history.push("/");
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(function() {
      alert("Successfully signed in!");
    }).catch(function(error) {
      alert(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </React.Fragment>
  );
}

export default Signin