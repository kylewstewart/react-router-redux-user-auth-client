import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import {
  logOut,
  setActiveItem,
} from '../actions';
import LogIn from './HeaderMenuLogInComponent';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
};

const pages = [
  { key: 1, name: 'home', path: '/' },
  { key: 2, name: 'about', path: '/about' },
  { key: 3, name: 'page one', path: '/pageone' },
  { key: 4, name: 'page two', path: '/pagetwo' },
];

class HeaderMenuComponent extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth !== this.props.isAuth) this.props.setActiveItem('home');
  }

  handleLogOut = () => {
    this.props.logOut();
    this.props.history.push('/login');
  }

  handleClick = (e, { name, path }) => {
    if (this.props.isAuth) {
      this.props.setActiveItem(name);
      this.props.history.push(path);
    }
  }

  render() {
    const { isAuth, activeItem } = this.props;

    return (
      <Menu secondary>
        <Menu.Menu position="left">
          {pages.map(page => (
            <Menu.Item
              key={page.key}
              name={page.name}
              path={page.path}
              active={isAuth && activeItem === page.name}
              onClick={this.handleClick}
            />
          ))}
        </Menu.Menu>
        <Menu.Menu position="right">
          {
            !isAuth ?
              <LogIn /> :
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

const mapStateToProps = ({ auth, activeItem }) => ({ isAuth: auth.isAuth, activeItem });

export default withRouter(connect(mapStateToProps, {
  logOut,
  setActiveItem,
})(HeaderMenuComponent));
