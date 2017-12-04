import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderMenu from '../components/HeaderMenuComponent';
import { logOut } from '../actions';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

const HeaderContainer = ({ isAuth, username }) => (
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
          <HeaderMenu />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

HeaderContainer.propTypes = propTypes;

const mapStateToProps = state => (
  {
    isAuth: state.auth.isAuth,
    username: state.user.username,
  }
);

export default connect(mapStateToProps, { logOut })(HeaderContainer);


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
