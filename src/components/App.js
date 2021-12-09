import React from 'react';
import Header from './Header';
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MemoryControl from "./MemoryControl";


function App() {
  return (
    <>
     <Router>
       <div className="container">
        <Header />
        <NavBar />
         {/* <Switch>
           <Route path="/expandmemory">
           <ExpandMemory />
           </Route>
           <Route path='/signin'>
           <Signin />
           </Route>
           {/* This route must be last 
            <Route path='/'>
            <Remember />
            </Route>
          </Switch> */}
        <MemoryControl />
       </div>
     </Router>
    </>
  );
}

export default App;