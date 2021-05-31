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

import NovoAgendamentoDev from '../components/NovoAgendamentoDev';
import NovaUnidadeDev from '../components/NovaUnidadeDev';

import Production from '../pages/Production';
import Development from '../pages/Development';

function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />      
          <Route  path="/production" component={Production} />
          <Route  path="/development" component={Development} />

          <Route  path="/agendamento-production" component={NovoAgendamentoProd} />
          <Route  path="/unidade-production" component={NovaUnidadeProd} />

          <Route  path="/agendamento-development" component={NovoAgendamentoDev} />
          <Route  path="/unidade-development" component={NovaUnidadeDev} />

          <Route  path="/test" component={Test} />              
          {/* <Route path="*" component={NotFoundRoute} />          */}
        </Switch>
      </Router>
    </div>
  );
}

export default Routers;

