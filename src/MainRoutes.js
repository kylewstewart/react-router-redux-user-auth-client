import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './main/HomeContainer';
import LogIn from './main/LogInContainer';
import NewUser from './main/NewUserContainer';
import About from './main/AboutContainer';
import PageOne from './main/PageOneContainer';
import PageTwo from './main/PageTwoContainer';
import withAuth from './HOCs/withAuth';

const MainRoutes = () => (
  <Switch>
    <Route path="/login" component={LogIn} />
    <Route path="/newuser" component={NewUser} />
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/pageone" component={PageOne} />
    <Route path="/pagetwo" component={PageTwo} />
    <Route component={Home} />
  </Switch>
);

export default withRouter(withAuth(MainRoutes));
