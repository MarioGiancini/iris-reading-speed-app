import React from 'react';
import types from 'prop-types';
import * as r from 'ramda';
import { Button, Intent } from '@blueprintjs/core';

import { ResultsMap } from 'Types/Results';

import {
  Table,
  Container,
  ActionPanel,
} from './ResultsPage.Components';

const ResultsPage = ({
  results,
  onDeleteResult,
}) => {
  const handleDeleteButtonClick = React.useCallback(result => () => {
    onDeleteResult(result);
  }, [onDeleteResult]);

  return (
    <Container>
      <ActionPanel>
        actions
      </ActionPanel>

      <Table>
        <thead>
          <tr>
            <th>Reading speed (words per minute)</th>
            <th>Date</th>
            <th style={{ width: 100 }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {r.values(results).map((resultEntry) => (
            <tr key={resultEntry.id}>
              <Table.Cell>
                {resultEntry.value}
              </Table.Cell>

              <Table.Cell>
                {resultEntry.date.toLocaleDateString()} {resultEntry.date.toLocaleTimeString()}
              </Table.Cell>

              <Table.Cell style={{ textAlign: 'center' }}>
                <Button
                  minimal
                  icon="trash"
                  intent={Intent.DANGER}
                  loading={resultEntry.isDeleting}
                  onClick={handleDeleteButtonClick(resultEntry)}
                />
              </Table.Cell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

ResultsPage.propTypes = {
  results: ResultsMap.isRequired,
  onDeleteResult: types.func.isRequired,
};

export { ResultsPage };
