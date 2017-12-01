import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import LogInContainer from './containers/LogInContainer';

const App = () => (
  <Container>
    <Header content="Welcome to 0x Auction" />
    <LogInContainer />
  </Container>
);

export default App;
