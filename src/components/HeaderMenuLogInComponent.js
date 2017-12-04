import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { setActiveItem } from '../actions';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  activeItem: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

class HeaderMenuLogInComponent extends Component {
  handleClick = (e, { name, path }) => {
    this.props.history.push(path);
    this.props.setActiveItem(name);
  }

  render() {
    const { isAuth, activeItem } = this.props;

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

const mapStateToProps = ({ auth, activeItem }) => ({ isAuth: auth.isAuth, activeItem });

export default withRouter(connect(mapStateToProps, {
  setActiveItem,
})(HeaderMenuLogInComponent));
