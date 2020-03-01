import React from 'react';
import types from 'prop-types';
import { Route } from 'react-router-dom';
import { Button, Navbar, Alignment } from '@blueprintjs/core';

import { ResultsPage } from './ResultsPage/ResultsPage.Container';

import { NavbarLink } from './NavbarLink/NavbarLink';

import {
  Content,
  Container,
} from './AdminPage.Components';

const AdminPage = ({ onSignout }) => (
  <Container>
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Administration</Navbar.Heading>
        <Navbar.Divider />

        <NavbarLink route="/admin/results" icon="th-filtered">
          Results
        </NavbarLink>

        <NavbarLink route="/admin/articles" icon="draw">
          Articles
        </NavbarLink>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Button onClick={onSignout}>Sign out</Button>
      </Navbar.Group>
    </Navbar>

    <Content>
      <Route path="/admin/results" component={ResultsPage} />
    </Content>
  </Container>
);

AdminPage.propTypes = {
  onSignout: types.func.isRequired,
};

export { AdminPage };
