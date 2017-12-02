import React from 'react';
import { Container } from 'semantic-ui-react';

import Main from './Main';
import Header from './containers/HeaderContainer';


const App = () => (
  <Container>
    <Header />
    <Main />
  </Container>
);

export default App;
