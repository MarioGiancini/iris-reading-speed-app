import cs from 'classnames';
import styled from 'styled-components';
import { HTMLTable, Classes } from '@blueprintjs/core';

const Table = styled(HTMLTable).attrs({
  className: cs(
    Classes.HTML_TABLE_BORDERED,
    Classes.HTML_TABLE_STRIPED,
    Classes.ELEVATION_2,
  ),
})`
  && {
    width: 100%;
    border-radius: 3px;
    background-color: white;
    table-layout: fixed;

    th {
      font-weight: 500;
    }
  }
`;

export { Table };
