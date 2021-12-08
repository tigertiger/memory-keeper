import React from 'react';
import NavBar from './NavBar';
import ExpandMemory from './ExpandMemory';
import Remember from './Remember';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Signin from "./Signin";


class MemoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMemory: null
    };
  }

  render() {
    const auth = getAuth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <div className="container">
            <h1>Please sign in.</h1>
            <Signin />
          </div>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      return (
        <div className="container">
          <Switch>
            <Route path="/expandmemory">
              <ExpandMemory />
            </Route>
            <Route path='/signin'>
              <Signin />
            </Route>
            {/* This route must be last */}
            <Route path='/'>
              <Remember />
            </Route>
          </Switch>
        </div>
      );
    }
  }
}


export default withFirestore(MemoryControl);
