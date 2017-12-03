import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as adapters from '../adapters';

const propTypes = {
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
          this.props.history.push('/home');
        }
      }
    };

    render = () => <WrappedComponent {...this.props} />
  }

  withAuth.propTypes = propTypes;

  return withRouter(withAuth);
}
