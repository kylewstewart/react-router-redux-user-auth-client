import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import { logOut } from '../actions';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

class HeaderMenuComponent extends Component {
  state = { activeItem: 'home' };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth !== this.props.isAuth) {
      this.setState({ activeItem: 'home' });
    }
  }

  handleLogOut = () => {
    this.props.logOut();
    this.props.history.push('/login');
  };

  handleClick = (e, { name }) => {
    if (this.props.isAuth) this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    const { isAuth } = this.props;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={isAuth && activeItem === 'home'}
          onClick={this.handleClick}
        />
        <Menu.Item
          name="page 1"
          active={isAuth && activeItem === 'page 1'}
          onClick={this.handleClick}
        />
        <Menu.Item
          name="page 2"
          active={isAuth && activeItem === 'page 2'}
          onClick={this.handleClick}
        />
        <Menu.Menu position="right">
          {
            !isAuth ?
              <Menu.Item
                name="log in"
                active={!isAuth}

              /> :
              <Menu.Item
                name="log out"
                onClick={this.handleLogOut}
              />
          }
        </Menu.Menu>
      </Menu>
    );
  }
}

HeaderMenuComponent.propTypes = propTypes;

const mapStateToProps = ({ auth }) => ({ isAuth: auth.isAuth });

export default withRouter(connect(mapStateToProps, { logOut })(HeaderMenuComponent));
