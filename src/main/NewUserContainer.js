import React, { Component } from 'react';
import { Container, Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  createUser,
  failedPasswordConfirm,
  clearNewUserMessage,
  addLogInMessage,
  setActiveItem,
} from '../actions';

const propTypes = {
  createUser: PropTypes.func.isRequired,
  failedPasswordConfirm: PropTypes.func.isRequired,
  clearNewUserMessage: PropTypes.func.isRequired,
  addLogInMessage: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isCreated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
};

class NewUserContainer extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  handleChange= (e, { name, value }) => this.setState({ [name]: value });

  handleClick = async () => {
    const { username, password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      const newUser = { username, password };
      await this.props.createUser(newUser);
      if (this.props.isCreated) {
        this.props.clearNewUserMessage();
        this.props.addLogInMessage('New user added, please log in.');
        this.props.setActiveItem('log in');
        this.props.history.push('/login');
      }
    } else {
      this.props.failedPasswordConfirm();
    }
  };

  render() {
    return (
      <Container>
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
          <Form.Input
            label="Confirm Password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <Form.Button
            content="Submit"
            loading={!!this.props.isFetching}
            onClick={this.handleClick}
          />
        </Form>
        <Header
          as="h3"
          color="red"
          content={this.props.message}
        />
      </Container>
    );
  }
}

NewUserContainer.propTypes = propTypes;

const mapStateToProps = ({ newUser }) => (
  {
    isCreated: newUser.isCreated,
    isFetching: newUser.isFetching,
    message: newUser.message,
  }
);

export default withRouter(connect(mapStateToProps, {
  createUser,
  failedPasswordConfirm,
  clearNewUserMessage,
  addLogInMessage,
  setActiveItem,
})(NewUserContainer));
