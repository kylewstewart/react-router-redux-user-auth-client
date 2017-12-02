import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
}

LogInContainer.propTypes = propTypes;

const mapStateToProps = ({ auth }) => (
  {
    isAuth: auth.isAuth,
    isFetching: auth.isFetching,
  }
);

export default connect(mapStateToProps, { logIn })(LogInContainer);
