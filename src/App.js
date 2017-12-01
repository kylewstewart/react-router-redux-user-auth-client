import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import LogInContainer from './containers/LogInContainer';

const App = () => (
  <Container>
    <Header content="Welcome to 0x Auction" />
    <LogInContainer />
  </Container>
);

const mapStateToProp = state => ({ state });

export default connect(mapStateToProp)(App);
