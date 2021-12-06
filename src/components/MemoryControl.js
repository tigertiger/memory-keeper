import React from 'react';
import PropTypes from 'prop-types';
import * as a from './../actions';
import NavBar from './NavBar';
import ExpandMemory from './ExpandMemory';
import Remember from './Remember';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

class MemoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null
    };
  }

  handleRememberClick = () => {
    if (this.state.selectedMemory != null) {
      this.setState({
        selectedMemory: null
      });
    } else {
      // const { dispatch } = this.props;
      // const action = a.toggleForm();
      // dispatch(action);

    }
    // this.setState(prevState => ({
    //   formVisibleOnPage: !prevState.formVisibleOnPage
    // }));
    console.log("handleRememberClick??? is this a thing???")
  }

  handleExpandMemory = () => {
    if (this.state.selectedMemory != null) {
      this.setState({
        selectedMemory: null,
      });
        const {dispatch} = this.props;
        const action = a.toggleForm();
        dispatch(action);
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
    console.log("handleExpandMemory")
  }

  render() {
    let currentlyVisible = null;
    
    if (this.props.formVisibleOnPage) {
      currentlyVisible = <ExpandMemory />;
    } else {
      currentlyVisible = <Remember />;
    }
    return (
      <React.Fragment>
        <NavBar onRememberClick={this.handleRememberClick} onExpandMemoryClick={this.handleExpandMemory}/>
        {currentlyVisible}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

MemoryControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

MemoryControl = connect(mapStateToProps)(MemoryControl);

export default withFirestore(MemoryControl);

