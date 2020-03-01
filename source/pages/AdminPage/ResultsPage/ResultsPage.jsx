import React from 'react';
import types from 'prop-types';
import * as r from 'ramda';
import { Button, Intent } from '@blueprintjs/core';

import { ResultsMap } from 'Types/Results';

import { Table } from './ResultsPage.Components';

const ResultsPage = ({
  results,
  onDeleteResult,
}) => {
  const handleDeleteButtonClick = React.useCallback(result => () => {
    onDeleteResult(result);
  }, [onDeleteResult]);

  return (
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
                intent={Intent.DANGER}
                loading={resultEntry.isDeleting}
                onClick={handleDeleteButtonClick(resultEntry)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ResultsPage.propTypes = {
  results: ResultsMap.isRequired,
  onDeleteResult: types.func.isRequired,
};

export { ResultsPage };
