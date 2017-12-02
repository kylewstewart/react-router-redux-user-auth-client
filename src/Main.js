import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from './containers/HomeContainer';
import LogIn from './containers/LogInContainer';

const Main = () => (
  <Container>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route component={Home} />
    </Switch>
  </Container>
);

export default Main;
