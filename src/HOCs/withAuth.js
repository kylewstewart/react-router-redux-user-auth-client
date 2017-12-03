import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authorized } from '../actions';
import * as adapters from '../adapters';

const propTypes = {
  authorized: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default function withAuth(WrappedComponent) {
  class withAuth extends Component {
    componentDidMount = async () => {
      if (!localStorage.getItem('token')) {
        this.props.history.push('/login');
      } else {
        const user = await adapters.currentUser();
        if (user.error) {
          this.props.history.push('/login');
        } else {
          this.props.authorized(user);
          this.props.history.push('/home');
        }
      }
    };

    render = () => <WrappedComponent {...this.props} />
  }

  withAuth.propTypes = propTypes;


  return withRouter(connect(null, { authorized })(withAuth));
}
