import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '../components/HeaderMenuComponent';
import { logOut } from '../actions';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  username: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

class HeaderContainer extends Component {
  state = { activeItem: 'home' };

  handleClick = () => {
    this.props.logOut();
    this.props.history.push('/login');
  };

  render() {
    const { activeItem } = this.state;
    const { isAuth, username } = this.props;

    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Header
                as="h4"
                floated="left"
                content="Cool App"
              />
              <Header
                as="h4"
                floated="right"
                content={!isAuth ? null : username}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Menu />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

HeaderContainer.propTypes = propTypes;

const mapStateToProps = state => (
  {
    isAuth: state.auth.isAuth,
    username: state.user.username,
  }
);

export default withRouter(connect(mapStateToProps, { logOut })(HeaderContainer));


// return (
//   <Container>
//     <Grid columns={2}>
//       <Grid.Row>
//         <Grid.Column floated="left" width={5}>
//           {
//             !props.isAuth ?
//               <Header content="Your App" /> :
//               <Header content={props.username} />
//           }
//         </Grid.Column>
//         <Grid.Column floated="right" width={5}>
//           {
//             !props.isAuth ?
//             null :
//             <Button
//               basic
//               content="Log Out"
//               onClick={handleClick}
//             />
//           }
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </Container>
// );
