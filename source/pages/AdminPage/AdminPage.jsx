import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Navbar, Alignment } from '@blueprintjs/core';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const AdminPage = ({ onSignout }) => (
  <Container>
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Administration</Navbar.Heading>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Button onClick={onSignout}>Sign out</Button>
      </Navbar.Group>
    </Navbar>
  </Container>
);

AdminPage.propTypes = {
  onSignout: PropTypes.func.isRequired,
};

export { AdminPage };
