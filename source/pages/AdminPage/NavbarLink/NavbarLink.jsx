import React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { NavLink as NavLinkBase } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

const Link = styled(NavLinkBase)`
  margin-right: 5px;
  border-radius: 3px;

  &:hover {
    text-decoration: none;
  }

  &.active {
    background: rgba(115, 134, 148, 0.3);
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
