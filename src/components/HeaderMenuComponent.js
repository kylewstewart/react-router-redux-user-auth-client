import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { logOut } from '../actions';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

class HeaderMenuComponent extends Component {
  state = { activeItem: 'home' };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth === true) {
      this.setState({ activeItem: 'home' });
    } else {
      this.setState({ activeItem: 'log in' });
    }
  }

  render() {
    const { activeItem } = this.state;
    const { isAuth, logOut } = this.props;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
        />
        <Menu.Item
          name="page 1"
          active={activeItem === 'page 2'}
        />
        <Menu.Item
          name="page 2"
          active={activeItem === 'page 3'}
        />
        <Menu.Menu position="right">
          {
            !isAuth ?
              <Menu.Item
                name="log in"
              /> :
              <Menu.Item
                name="log out"
                onClick={logOut}
              />
          }
        </Menu.Menu>
      </Menu>
    );
  }
}

HeaderMenuComponent.propTypes = propTypes;

const mapStateToProps = ({ auth }) => ({ isAuth: auth.isAuth });

export default connect(mapStateToProps, { logOut })(HeaderMenuComponent);
