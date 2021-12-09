import React from "react";
import { getAuth, signOut } from 'firebase/auth';

function Signout(){ 

  function doSignOut() {
    const auth = getAuth();
    signOut(auth).then(function() {
      alert("Successfully signed out!");
    }).catch(function(error) {
      alert(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default Signout;