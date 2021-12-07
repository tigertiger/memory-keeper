import React from "react";
import PropTypes from "prop-types";

function Memory(props){
  const memoryStyles = {
    className: 'card',
    width:'500px'
  }
  return (
    <React.Fragment>
      <div style={memoryStyles} onClick = {() => props.whenMemoryClicked(props.id)}>
        <h3>{props.title}</h3>
        <p><em>{props.description}</em></p>
        <p>{props.image}</p>
        <hr/>
      </div>
      </React.Fragment>
  );
}

Memory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string
};

export default Memory;