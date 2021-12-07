import React from 'react'
import Memory from './Memory';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';


function Remember(props) {
  useFirestoreConnect([
    { collection: 'memory'}
  ]);

  const memory = useSelector(state => state.firestore.ordered.memory);

  if (isLoaded(memory)) {
    return (
      <>
      {memory.map((memory) =>
      <Memory 
      title={memory.title}
      description={memory.description}
      image={memory.image}
      id={memory.id}
      key={memory.id} />)}
      </>
    );
  } else {
    return (
      <>
      <h3>Loading...</h3>
      </>
    )
  }
}

Remember.propTypes = {
  onMemorySelection: PropTypes.func
};

export default Remember;

