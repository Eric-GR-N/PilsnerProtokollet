import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import PilsnerProtokollet from './pages/PilsnerProtokollet';




function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
       <Route path='/' exact>
       <PilsnerProtokollet/>
       </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
