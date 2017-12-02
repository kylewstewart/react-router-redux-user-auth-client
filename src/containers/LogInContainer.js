import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Home from './HomeContainer';
import { logIn } from '../actions';

const propTypes = {
  logIn: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

class LogInContainer extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange= (e, { name, value }) => this.setState({ [name]: value });

  handleClick = () => this.props.logIn(this.state.username, this.state.password);

  render() {
    if (!this.props.isAuth) {
      return (
        <Form>
          <Form.Input
            label="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Button
            content="Submit"
            onClick={this.handleClick}
          />
        </Form>
      );
    }

    return <Redirect to={Home} />;
  }
}

LogInContainer.propTypes = propTypes;

const mapStateToProps = ({ auth }) => (
  {
    isAuth: auth.isAuth,
    isFetching: auth.isFetching,
  }
);

export default connect(mapStateToProps, { logIn })(LogInContainer);
