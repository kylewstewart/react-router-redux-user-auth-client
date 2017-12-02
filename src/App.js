import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import HomeContainer from './containers/HomeContainer';
import LogInContainer from './containers/LogInContainer';
import withAuth from './HOCs/withAuth';


const App = () => (
  <Container>
    <Route path="/home" component={HomeContainer} />
    <Route path="/login" component={LogInContainer} />
  </Container>
);

export default withAuth(App);
