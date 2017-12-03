import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Home from './containers/HomeContainer';
import LogIn from './containers/LogInContainer';
import withAuth from './HOCs/withAuth';

const Main = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route component={Home} />
    </Switch>
  </Container>
);

const mapStateToProps = ({ auth }) => ({ isAuth: auth.isAuth });

export default withRouter(connect(mapStateToProps)(withAuth(Main)));
