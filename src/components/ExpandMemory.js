import React from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function ExpandMemory(props){
  const firestore = useFirestore();

  function addMemoryToFirestore(event) {
    event.preventDefault();
    props.onExpandMemoryClick();
    return firestore.collection('memory').add({
      title: event.target.title.value,
      description: event.target.description.value,
      image: event.target.image.value
    });
  }

  return (
    <div>
      <form onSubmit={addMemoryToFirestore}>
        <input
          type='text'
          name='title'
          placeholder='Memory Title' /><br />
        <textarea name='description' placeholder='Tell us your memory' /><br />
        <input
          type='file'
          name='image'
          /><br />
          <button type='submit'>Expand</button>
      </form>
    </div>
  );
}

ExpandMemory.propTypes = {
  onExpandMemoryClick: PropTypes.func
};

export default ExpandMemory;
