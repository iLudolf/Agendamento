import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Test from '../pages/Test';

function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />      
          <Route exact path="/test" component={Test} />              
          {/* <Route path="*" component={NotFoundRoute} />          */}
        </Switch>
      </Router>
    </div>
  );
}

export default Routers;

