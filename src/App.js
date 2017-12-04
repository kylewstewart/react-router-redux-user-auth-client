import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Main from './MainRoutes';
import Header from './header/HeaderContainer';


const App = () => (
  <Container fluid={false} text>
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
