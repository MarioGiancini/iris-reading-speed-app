import React from 'react';
import PropTypes from 'prop-types';
import { Button, Navbar, Alignment } from '@blueprintjs/core';

import { ResultList } from 'Models/Results';

import { LocationLink } from 'Components';
import { Container, Content, Table } from './AdminPage.Components';

const AdminPage = ({ results, onSignout }) => (
  <Container>
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Administration</Navbar.Heading>
      </Navbar.Group>

      <Navbar.Group align={Alignment.RIGHT}>
        <Button onClick={onSignout}>Sign out</Button>
      </Navbar.Group>
    </Navbar>

    <Content>
      <Table>
        <thead>
          <tr>
            <th>Reading speed (words per minute)</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.value}</td>
              <td>{result.date.toLocaleDateString()} {result.date.toLocaleTimeString()}</td>
              <td>
                {result.location && (
                  <LocationLink location={result.location} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  </Container>
);

AdminPage.propTypes = {
  results: ResultList.isRequired,
  onSignout: PropTypes.func.isRequired,
};

export { AdminPage };
