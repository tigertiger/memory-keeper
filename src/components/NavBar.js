import React from 'react';
import PropTypes from "prop-types";

function NavBar(props){
  const {onRememberClick, onExpandMemoryClick} = props;
  return (
    <div>

      <button onClick={onRememberClick}>Remember</button>
      <button onClick={onExpandMemoryClick}>Expand our Mind</button>
      <button>Log In</button>

    </div>
  );
}

NavBar.propTypes = {
  onRememberClick: PropTypes.func,
  onExpandMemoryClick: PropTypes.func
};

export default NavBar;
