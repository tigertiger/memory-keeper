import React from 'react';
import ExpandMemory from './ExpandMemory';
import Remember from './Remember';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Signout from "./Signout";
import * as a from './../actions';


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
          <Switch>
          <div className="container">
            <h1>Please sign in.</h1>
            <Route path="/signin">
            <Signin />
            </Route>
            <Route path="/signup">
            <Signup />
            </Route>
            <Route path="/signout">
            <Signout />
            </Route>
          </div>
          </Switch>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null) && (this.props.formVisibleOnPage)) {
      return (
        <div className="container">
          <Switch>
            <Route path="/expandmemory">
              <ExpandMemory />
            </Route>
            <Route path='/signout'>
              <Signout />
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
