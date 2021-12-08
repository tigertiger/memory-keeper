import React from 'react';
import {  Link } from "react-router-dom";

function NavBar(props){
  return (
    <div>

      <Link to='/'>Remember</Link>
      <Link to='/expandmemory'>Expand our Mind</Link>
      <Link to='/signin'>Log In</Link>

    </div>
  );
}

export default NavBar;
