import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import withAuth from '../HOCs/withAuth';

const HomeContainer = () => (
  <Container>
    <Header content="Welcome to the good stuff!" />
  </Container>
);

export default withAuth(HomeContainer);
