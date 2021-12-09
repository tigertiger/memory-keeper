import React from 'react';
import {  Link } from "react-router-dom";

function NavBar(props){
  return (
    <div>

      <Link to='/'>Remember</Link>
      <Link to='/expandmemory'>Expand our Mind</Link>
      <Link to='/signout'>Log Out</Link>
      <Link to='/signin'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>

    </div>
  );
}

export default NavBar;
