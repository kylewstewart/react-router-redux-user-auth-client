import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from './containers/HomeContainer';
import LogIn from './containers/LogInContainer';
import withAuth from './HOCs/withAuth';


const App = () => (
  <Container>
    <Route path="/home" component={Home} />
    <Route path="/login" component={LogIn} />
  </Container>
);

export default withAuth(App);
