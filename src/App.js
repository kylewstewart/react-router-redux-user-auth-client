import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Main from './Main';
import Header from './containers/HeaderContainer';


const App = () => (
  <Container>
    <Grid columns={1}>
      <Grid.Row />
      <Grid.Row>
        <Grid.Column width={16}>
          <Header />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Main />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default App;
