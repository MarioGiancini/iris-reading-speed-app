import React from 'react';
import types from 'prop-types'
import styled from 'styled-components';
import { Link as LinkBase } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

const Link = styled(LinkBase)`
  &:hover {
    text-decoration: none;
  }
`;

const NavbarLink = ({ route, icon, children }) => (
  <Link to={route}>
    <Button minimal icon={icon}>
      {children}
    </Button>
  </Link>
);

NavbarLink.propTypes = {
  icon: types.string,
  route: types.string.isRequired,
  children: types.node.isRequired,
};

export { NavbarLink };
