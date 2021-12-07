import React from "react";
import PropTypes from "prop-types";

function Memory(props){
  const memoryStyles = {
    className: 'basicCard',
    width:'500px',
    boxShadow: '-4px -3px 45px 0px rgba(28 163 125 / 35%)',
    padding:'1%',
    margin:'2%',
    borderRadius: '3%'
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