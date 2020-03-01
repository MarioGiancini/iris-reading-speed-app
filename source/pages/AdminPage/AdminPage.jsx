import React from 'react';
import types from 'prop-types';
import * as r from 'ramda';
import { Button, Navbar, Alignment } from '@blueprintjs/core';

import { ResultsMap } from 'Types/Results';

import { Container, Content, Table } from './AdminPage.Components';

const AdminPage = ({
  results,
  onSignout,
  onDeleteResult,
}) => {
  const handleDeleteButtonClick = React.useCallback(result => () => {
    onDeleteResult(result);
  }, [onDeleteResult]);

  return (
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
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {r.values(results).map((resultEntry) => (
              <tr key={resultEntry.id}>
                <td>{resultEntry.value}</td>
                <td>{resultEntry.date.toLocaleDateString()} {resultEntry.date.toLocaleTimeString()}</td>
                <td>
                  <Button
                    minimal
                    icon="trash"
                    loading={resultEntry.isDeleting}
                    onClick={handleDeleteButtonClick(resultEntry)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

AdminPage.propTypes = {
  results: ResultsMap.isRequired,
  onSignout: types.func.isRequired,
  onDeleteResult: types.func.isRequired,
};

export { AdminPage };
