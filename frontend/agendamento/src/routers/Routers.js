import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Test from '../pages/Test';

import NovoAgendamentoProd from '../components/NovoAgendamentoProd';
import NovaUnidadeProd from '../components/NovaUnidadeProd';

import Production from '../pages/Production';

function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />      
          <Route  path="/production" component={Production} />

          <Route  path="/novo-agendamento-production" component={NovoAgendamentoProd} />
          <Route  path="/nova-Unidade-production" component={NovaUnidadeProd} />

          <Route  path="/test" component={Test} />              
          {/* <Route path="*" component={NotFoundRoute} />          */}
        </Switch>
      </Router>
    </div>
  );
}

export default Routers;

