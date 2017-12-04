import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

class HeaderMenuLogInComponent extends Component {
  state = { activeItem: 'log in' };

  handleClick = (e, { name, path }) => {
    this.setState({ activeItem: name });
    this.props.history.push(path);
  }

  render() {
    const { activeItem } = this.state;
    const { isAuth } = this.props;

    return (
      <Menu secondary>
        <Menu.Item
          name="new user"
          path="/newuser"
          active={!isAuth && activeItem === 'new user'}
          onClick={this.handleClick}
        />
        <Menu.Item
          name="log in"
          path="/login"
          active={!isAuth && activeItem === 'log in'}
          onClick={this.handleClick}
        />
      </Menu>
    );
  }
}

HeaderMenuLogInComponent.propTypes = propTypes;

const mapStateToProps = ({ auth }) => ({ isAuth: auth.isAuth });

export default withRouter(connect(mapStateToProps)(HeaderMenuLogInComponent));
