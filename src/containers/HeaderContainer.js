import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Grid, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../actions';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const HeaderContainer = (props) => {
  const handleClick = () => {
    props.logOut();
    props.history.push('/login');
  };

  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column floated="left" width={5}>
            <Header content="Your App" />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            {
              !props.isAuth ?
              null :
              <Button
                basic
                content="Log Out"
                onClick={handleClick}
              />
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

HeaderContainer.propTypes = propTypes;

const mapStateToProps = ({ auth }) => ({ isAuth: auth.isAuth });

export default withRouter(connect(mapStateToProps, { logOut })(HeaderContainer));
